import Image from "next/image";
import s from "./news.module.css";
import NewsList from "./newsList";
import { getNewsData } from "@/app/lib/news";

const News = async () => {
  // Завантажуємо перші 6 новин на сервері
  const data = await getNewsData(1, 6);

  return (
    <main>
      <div className={s.title_block}>
        <h1 className={s.title}>Новини</h1>
        <Image
          src="/imgs/news.png"
          alt="Банер новин"
          width={2048}
          height={363}
          priority
          sizes="100vw"
          className={s.hero_image}
        />
      </div>

      <section>
        {/* Передаємо початкові дані в клієнтський список */}
        <NewsList
          initialNews={data.items}
          initialPage={1}
          totalPages={data.totalPages}
        />
      </section>
    </main>
  );
};

export default News;
