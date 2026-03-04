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
            <h1 className={s.hero_title}>Андрійко Dev</h1>
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

          <Link className={s.news_link} href="#">
            <button className={s.news_btn}>Більше новин</button>
          </Link>
        </section>

        <section className={s.bnft}>
          <h2 className={s.bnft_title}>
            найбільша мережа кіберспортивних клубів України
          </h2>

          <ol className={s.bnft_list}>
            <li className={s.bnft_item} style={{ "--delay": "1s" }}>
              <Image
                src="/icons/bnft-0.svg"
                width="78"
                height="78"
                alt="ігрові ПК"
              />
              <h3 className={s.bnft_desc}>Потужні ігрові ПК</h3>
            </li>
            <li className={s.bnft_item} style={{ "--delay": "2.3s" }}>
              <Image
                src="/icons/bnft-1.svg"
                width="78"
                height="78"
                alt="комфорт і сервіс"
              />
              <h3 className={s.bnft_desc}>
                Максимальний комфорт і бездоганний сервіс
              </h3>
            </li>
            <li className={s.bnft_item} style={{ "--delay": "3.6s" }}>
              <Image
                src="/icons/bnft-2.svg"
                width="78"
                height="78"
                alt="турніри"
              />
              <h3 className={s.bnft_desc}>Власні регулярні турніри</h3>
            </li>
            <li className={s.bnft_item} style={{ "--delay": "4.9s" }}>
              <Image
                src="/icons/bnft-3.svg"
                width="78"
                height="78"
                alt="розіграші"
              />
              <h3 className={s.bnft_desc}>Акції та розіграші</h3>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
