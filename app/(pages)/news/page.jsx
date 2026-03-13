import Image from "next/image";
import s from "./news.module.css";
import NewsList from "./newsList";
import { getNewsData } from "@/app/lib/news";

const News = async () => {
  // Прямий виклик при першому рендері на сервері
  const data = await getNewsData(1, 6);

  return (
    <main>
      <div className={s.title_block}>
        <h1 className={s.title}>Новини</h1>
        <Image
          src="/imgs/news.png"
          alt="Банер"
          width={2048}
          height={363}
          priority
          sizes="100vw"
          className={s.hero_image}
        />
      </div>

      <section>
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
