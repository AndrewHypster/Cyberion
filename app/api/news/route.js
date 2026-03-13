import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  try {
    // Дістаємо параметри з URL
    const { searchParams } = new URL(request.url);

    // Перетворюємо в числа, задаємо дефолтні значення
    const page = parseInt(searchParams.get("page")) || 1;
    const size = parseInt(searchParams.get("size")) || 6;

    // Читаємо файл бази даних
    const filePath = path.join(process.cwd(), "app/api/dataBase/news.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const allNews = JSON.parse(fileData);

    // Розраховуємо індекси для обрізки масиву
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    // Беремо тільки потрібну частину даних
    const paginatedNews = allNews.slice(startIndex, endIndex);

    return NextResponse.json({
      items: paginatedNews,
      total: allNews.length,
      page,
      size,
      totalPages: Math.ceil(allNews.length / size),
    });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
