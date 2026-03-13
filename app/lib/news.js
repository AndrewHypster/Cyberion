"use server"; // Обов'язково для Server Actions

import fs from "fs";
import path from "path";

export async function getNewsData(page = 1, size = 6) {
  try {
    const filePath = path.join(process.cwd(), "app/api/dataBase/news.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const allNews = JSON.parse(fileData);

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    return {
      items: allNews.slice(startIndex, endIndex),
      totalPages: Math.ceil(allNews.length / size),
    };
  } catch (error) {
    console.error("News read error:", error);
    return { items: [], totalPages: 0 };
  }
}
