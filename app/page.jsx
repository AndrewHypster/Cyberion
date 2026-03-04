import Image from "next/image";
import s from "./page.module.css";
import Link from "next/link";
import { CardNews } from "./components/cards";

export default function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <section className={s.hero}>
          <div className={s.hero_content}>
            <Image
              className={s.hero_img}
              src="/icons/logo.svg"
              width="1069"
              height="181"
              alt="logo"
            />
            <h1 className={s.hero_title}>Мережа кіберклубів</h1>
            <p className={s.hero_desc}>
              Створюємо унікальний кіберспортивний простір для найвибагливіших
              геймерів
            </p>
            <Link href="#">
              <button className={s.hero_btn}>Забронювати</button>
            </Link>
          </div>
        </section>

        <section className={s.news}>
          <h2 className={s.news_title}>Останні новини</h2>

          <ul className={s.news_list}>
            <li className={s.news_item}>
              <CardNews
                img="/imgs/news-0.png"
                link="#"
                text="CYBERDAY від CYBERION! Гравці з усіх міст зійшлися на головному турнірі країни!"
                date="14.11.2025"
              />
            </li>
            <li className={s.news_item}>
              <CardNews
                img="/imgs/news-0.png"
                link="#"
                text="CYBERDAY від CYBERION! Гравці з усіх міст зійшлися на головному турнірі країни!"
                date="14.11.2025"
              />
            </li>
            <li className={s.news_item}>
              <CardNews
                img="/imgs/news-0.png"
                link="#"
                text="CYBERDAY від CYBERION! Гравці з усіх міст зійшлися на головному турнірі країни!"
                date="14.11.2025"
              />
            </li>
            <li className={s.news_item}>
              <CardNews
                img="/imgs/news-0.png"
                link="#"
                text="CYBERDAY від CYBERION! Гравці з усіх міст зійшлися на головному турнірі країни!"
                date="14.11.2025"
              />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
