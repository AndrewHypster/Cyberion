import Image from "next/image";
import s from "./page.module.css";
import Link from "next/link";

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
      </main>
    </div>
  );
}
