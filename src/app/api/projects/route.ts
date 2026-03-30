import { NextResponse } from "next/server";
import { getDb } from "@/lib/d1";

// export const runtime = "edge"; // 로컬 Wrangler Bridge 지원을 위해 일시 주석 처리

export async function GET(request: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const result = await db
          .prepare("SELECT * FROM projects WHERE id = ?")
          .bind(id)
          .first();
        return NextResponse.json(result);
    }

    const { results } = await db
      .prepare("SELECT * FROM projects ORDER BY created_at DESC")
      .all();
    
    return NextResponse.json(results);
  } catch (error: any) {
    console.error("D1 Fetch Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const db = getDb();
    const { title, description, image_url } = await request.json();

    if (!title) {
        return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const result = await db
      .prepare("INSERT INTO projects (title, description, image_url) VALUES (?, ?, ?)")
      .bind(title, description, image_url)
      .run();

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("D1 Insert Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const db = getDb();
    const { id, title, description, image_url } = await request.json();

    if (!id || !title) {
        return NextResponse.json({ error: "ID and Title are required" }, { status: 400 });
    }

    await db
      .prepare("UPDATE projects SET title = ?, description = ?, image_url = ? WHERE id = ?")
      .bind(title, description, image_url, id)
      .run();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("D1 Update Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db
      .prepare("DELETE FROM projects WHERE id = ?")
      .bind(id)
      .run();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("D1 Delete Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
