import s from "./news-item.module.css";
import ReactMarkdown from "react-markdown";
import { getNewsData } from "@/app/lib/news";
import { notFound } from "next/navigation";
import Image from "next/image";

// Це серверний компонент
export default async function NewsArticlePage({ params }) {
  // 1. Отримуємо ID з URL (в Next 15 треба await)
  const { id } = await params;

  // 2. Отримуємо всі новини (або зроби в lib функцію getNewsById)
  const data = await getNewsData(1, 100);
  const article = data.items.find((item) => item.id.toString() === id);

  // 3. Якщо новини не існує — викидаємо 404
  if (!article) {
    notFound();
  }

  return (
    <main className={s.page}>
      <img
        className={s.img}
        src={article.image}
        width={944}
        height={531}
        alt={article.title}
      />
      <div className={s.date}>
        <Image
          className={s.date_icon}
          src="/icons/date.svg"
          width={35}
          height={35}
          alt={article.date}
        />
        <p className={s.date_text}>{article.date}</p>
      </div>

      <h1 className={s.title}>
        <ReactMarkdown>{article.title}</ReactMarkdown>
      </h1>
      <div className={s.content}>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </main>
  );
}
