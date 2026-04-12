import { NextResponse } from "next/server";
import { getDb } from "@/lib/d1";

export async function GET(request: Request) {
  try {
    const db = getDb();
    
    const { results } = await db
      .prepare("SELECT * FROM categories ORDER BY id ASC")
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
    const { name } = await request.json();

    if (!name) {
        return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    const result = await db
      .prepare("INSERT INTO categories (name) VALUES (?)")
      .bind(name)
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
    const { id, name } = await request.json();

    if (!id || !name) {
        return NextResponse.json({ error: "ID and Name are required" }, { status: 400 });
    }

    await db
      .prepare("UPDATE categories SET name = ? WHERE id = ?")
      .bind(name, id)
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

    // Check if any projects are using this category
    const countResult = await db
        .prepare("SELECT COUNT(*) as count FROM projects WHERE category_id = ?")
        .bind(id)
        .first();

    if (countResult && countResult.count > 0) {
        return NextResponse.json({ error: "이미 프로젝트에 매핑되어 있는 카테고리는 삭제할 수 없습니다. 먼저 관련 프로젝트의 카테고리를 변경하거나 삭제해주세요." }, { status: 400 });
    }

    await db
      .prepare("DELETE FROM categories WHERE id = ?")
      .bind(id)
      .run();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("D1 Delete Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
