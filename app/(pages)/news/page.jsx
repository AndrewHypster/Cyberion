import Image from "next/image";
import s from "./news.module.css";
import NewsList from "./newsList";
import { getNewsData } from "@/app/lib/news";
import Baner from "@/app/components/baner";

const News = async () => {
  // Прямий виклик при першому рендері на сервері
  const data = await getNewsData(1, 6);

  return (
    <main>
      <Baner text="Новини" img="/imgs/news.png" />

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
