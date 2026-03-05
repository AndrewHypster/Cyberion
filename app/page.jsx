import Image from "next/image";
import s from "./page.module.css";
import Link from "next/link";
import { CardNews } from "./components/cards";
import ObservedElement from "./components/observed-element";

const BnftItem = ({ delay, img, alt, text }) => {
  return (
    <ObservedElement threshold={.8} className={s.observe} activeClass={s.activeItem}>
      <li className={s.bnft_item} style={{ "--delay": delay }}>
        <Image src={img} width="78" height="78" alt={alt} />
        <h3 className={s.bnft_desc}>{text}</h3>
      </li>
    </ObservedElement>
  );
};

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

          <ObservedElement threshold={0.2} activeClass={s.activeList}>
            <ol className={s.bnft_list}>
              <BnftItem
                delay="1s"
                img="/icons/bnft-0.svg"
                alt="ігрові ПК"
                text="Потужні ігрові ПК"
              />

              <BnftItem
                delay="2.3s"
                img="/icons/bnft-1.svg"
                alt="комфорт і сервіс"
                text="Максимальний комфорт і бездоганний сервіс"
              />
              <BnftItem
                delay="3.6s"
                img="/icons/bnft-2.svg"
                alt="турніри"
                text="Власні регулярні турніри"
              />

              <BnftItem
                delay="4.9s"
                img="/icons/bnft-3.svg"
                alt="розіграші"
                text="Акції та розіграші"
              />
            </ol>
          </ObservedElement>

        </section>
      </main>
    </div>
  );
}
