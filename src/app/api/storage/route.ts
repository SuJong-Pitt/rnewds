import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";

export const runtime = "nodejs"; 

// API 본문 크기 제한을 20MB로 늘립니다.
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '50mb',
        },
    },
};

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
