'use client'

import Image from "next/image";
import s from "./page.module.css";
import Link from "next/link";
import { CardNews } from "./components/cards";
import ObservedElement from "./components/observed-element";
import InfiniteGallery from "./components/gallery";

const galleryData = [
  { id: 0, src: "/imgs/gallery-0.jpg", size: "small" },
  { id: 1, src: "/imgs/gallery-1.jpg", size: "small" },
  { id: 2, src: "/imgs/gallery-2.jpg", size: "large" }, // Займає місце двох
  { id: 3, src: "/imgs/gallery-3.jpg", size: "small" },
  { id: 4, src: "/imgs/gallery-4.jpg", size: "small" },
  { id: 5, src: "/imgs/gallery-5.jpg", size: "large" },
  { id: 6, src: "/imgs/gallery-6.jpg", size: "small" },
  { id: 7, src: "/imgs/gallery-7.jpg", size: "small" },
  { id: 8, src: "/imgs/gallery-8.jpg", size: "large" },
  { id: 9, src: "/imgs/gallery-9.jpg", size: "small" },
  { id: 10, src: "/imgs/gallery-10.jpg", size: "small" },
  { id: 11, src: "/imgs/gallery-11.jpg", size: "large" },
  { id: 12, src: "/imgs/gallery-12.jpg", size: "small" },
  { id: 13, src: "/imgs/gallery-13.jpg", size: "small" },
  { id: 14, src: "/imgs/gallery-14.jpg", size: "large" },
  { id: 15, src: "/imgs/gallery-15.jpg", size: "small" },
  { id: 16, src: "/imgs/gallery-16.jpg", size: "small" },
  { id: 17, src: "/imgs/gallery-17.jpg", size: "large" },
];

const createGroups = (data) => {
  const groups = [];
  let currentGroup = [];

  data.forEach((item) => {
    currentGroup.push(item);
    if (item.size === "large" || currentGroup.length === 3) {
      groups.push(currentGroup);
      currentGroup = [];
    }
  });
  return groups;
};

const groups = createGroups(galleryData);

const BnftItem = ({ delay, img, alt, text }) => {
  return (
    <ObservedElement
      threshold={0.8}
      className={s.observe}
      activeClass={s.activeItem}
    >
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

        <section className={s.gallery}>
            <InfiniteGallery className={s.gallery_track} imgsGallery={galleryData}>
              {groups.map((group, gIdx) => (
                <div key={gIdx} className={s.gallery_item}>
                  {group.map((img) => (
                    <div
                      key={img.id}
                      data-photo-id={img.id}
                      className={
                        img.size === "large"
                          ? s.gallery_img__large
                          : s.gallery_img_wrapper
                      }
                    >
                      <Image
                        src={img.src}
                        width={500}
                        height={300}
                        alt="img"
                        className={s.gallery_img}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </InfiniteGallery>
        </section>

        <section className={s.map}>
          <h2 className={s.map_title}>Наші клуби</h2>
          <div className={s.map_google}>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=15Ilu3mg1UOo3QrWmbhJqgDbGuUvG_oY&ehbc=2E312F&noprof=1"
              width="640"
              height="640"
            ></iframe>
          </div>
        </section>

        <section className={s.form_sec}>
          <div className={s.form_wrap}>
            <form className={s.form}>
              <h2 className={s.form_title}>
                ХОЧЕШ <span>ВЛАСНИЙ КЛУБ?</span>
                <br />
                <small>НАПИШИ НАМ</small>
              </h2>
              <input type="text" name="Ім'я" placeholder="Ім'я" />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="true"
              />
              <input
                type="text"
                name="Повідомлення"
                placeholder="Повідомлення"
              />
              <button>Відправити</button>
            </form>
            <Image
              className={s.form_img}
              src="/imgs/main-form.jpg"
              width="430"
              height="440"
              alt="наші люди"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
