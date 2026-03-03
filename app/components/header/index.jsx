import Link from "next/link";
import s from "./style.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <Link className={s.logo} href="#">
          <Image src="/icons/logo.svg" width="203" height="34" alt="logo" />
        </Link>

        <nav className={s.navigation}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.itemLink} href="#">
                Турніри
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.itemLink} href="#">
                Новини
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.itemLink} href="#">
                Клуби
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.itemLink} href="#">
                Блог
              </Link>
            </li>
          </ul>
        </nav>

        <ul className={s.social}>
          <li className={s.socialItem}>
            <Link href="#">
              <Image
                src="/icons/insta.svg"
                width="36"
                height="36"
                alt="instagram"
              />
            </Link>
          </li>
          <li className={s.socialItem}>
            <Link href="#">
              <Image
                src="/icons/youtube.svg"
                width="36"
                height="36"
                alt="youtube"
              />
            </Link>
          </li>
          <li className={s.socialItem}>
            <Link href="#">
              <Image
                src="/icons/telegram.svg"
                width="36"
                height="36"
                alt="telegram"
              />
            </Link>
          </li>
        </ul>

        <button className={s.sidebar}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
