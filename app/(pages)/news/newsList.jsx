"use client"; // Обов'язково!

import { useState } from "react";
import { CardNews } from "@/app/components/cards";
import s from "./news.module.css";

export default function NewsList({ initialNews, initialPage, totalPages }) {
  const [news, setNews] = useState(initialNews);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (page >= totalPages || loading) return;

    setLoading(true);
    const nextPage = page + 1;

    try {
      const res = await fetch(`/api/news?page=${nextPage}&size=6`);
      const data = await res.json();

      // Додаємо нові дані до старих
      setNews((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (e) {
      console.error("Failed to load more news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ul className={s.list}>
        {news.map((item, k) => (
          <li className={s.item} key={k}>
            <CardNews
              img={item.image}
              link={`/news/${item.id}`}
              text={item.title}
              date={item.date}
            />
          </li>
        ))}
      </ul>

      {page < totalPages && (
        <button className={s.list_btn} onClick={loadMore} disabled={loading}>
          {loading ? "Завантаження..." : "Показати ще"}
        </button>
      )}
    </>
  );
}
