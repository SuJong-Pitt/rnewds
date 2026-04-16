import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// App Router에서는 config.api.bodyParser가 작동하지 않습니다. (Pages Router 전용)
// 대신 Presigned URL 방식을 사용하여 서버의 용량 제한을 우회합니다.

const r2Client = new S3Client({
    region: "auto",
    endpoint: process.env.R2_ENDPOINT!,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
    forcePathStyle: true, // Cloudflare R2에서 권장하는 설정
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME!;

// 1. GET: 업로드를 위한 Presigned URL 생성
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const filename = searchParams.get("filename");
        const contentType = searchParams.get("contentType");

        if (!filename) {
            return NextResponse.json({ error: "Filename is required" }, { status: 400 });
        }

        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: filename,
            ContentType: contentType || "application/octet-stream",
        });

        // 1시간 동안 유효한 업로드 URL 생성
        const signedUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
        const publicUrl = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`;

        return NextResponse.json({ 
            uploadUrl: signedUrl, 
            publicUrl: publicUrl 
        });
    } catch (error: any) {
        console.error("Presigned URL Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// 2. POST: (기존 방식 유지 - 작은 파일용)
export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const filename = formData.get("filename") as string;

        if (!file || !filename) {
            return NextResponse.json({ error: "File and filename are required" }, { status: 400 });
        }

        const buffer = await file.arrayBuffer();
        
        const uploadParams = {
            Bucket: BUCKET_NAME,
            Key: filename,
            Body: new Uint8Array(buffer),
            ContentType: file.type,
        };

        await r2Client.send(new PutObjectCommand(uploadParams));
        
        const publicUrl = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`;

        return NextResponse.json({ success: true, url: publicUrl });
    } catch (error: any) {
        console.error("R2 Upload Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const filename = searchParams.get('filename');

        if (!filename) {
            return NextResponse.json({ error: "Filename is required" }, { status: 400 });
        }

        await r2Client.send(new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: filename
        }));

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
