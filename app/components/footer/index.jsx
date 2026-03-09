import Link from "next/link";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={`${s.block}`}>
          <h4 className={s.title}>Соціальні мережі</h4>
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Telegram</Link>
          <Link href="#">Viber</Link>
        </div>
        <div className={`${s.block}`}>
          <h4 className={s.title}>Карта сайту</h4>
          <Link href="#">Турніри</Link>
          <Link href="#">Новини</Link>
          <Link href="#">Клуби</Link>
          <Link href="#">Блог</Link>
        </div>
        <button className={s.button}>Зв'язатися</button>
      </div>
      <div className={s.copy}>c 2026 Coffee House</div>
    </footer>
  );
};

export default Footer;
