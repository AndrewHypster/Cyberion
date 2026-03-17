"use client";

import { useState } from "react";
import { CardNews } from "@/app/components/cards";
import s from "./news.module.css";
import { getNewsData } from "@/app/lib/news";


export default function NewsList({ initialNews, initialPage, totalPages }) {
  const [news, setNews] = useState(initialNews);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (page >= totalPages || loading) return;

    setLoading(true);
    const nextPage = page + 1;

    // Викликаємо функцію як звичайний JavaScript
    const data = await getNewsData(nextPage, 6);

    setNews((prev) => [...prev, ...data.items]);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <>
      <ul className={s.list}>
        {news.map((item, k) => (
          <li className={s.item} key={k}>
            <CardNews
              img={item.image}
              link={item.id}
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
