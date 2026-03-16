"use client";

import Link from "next/link";
import s from "./header.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={`${s.wrapper} ${isOpen ? s.open : ""}`}>
      <header className={s.header}>
        <div className={s.content}>
          <Link className={s.logo} href="/">
            <Image src="/icons/logo.svg" width="203" height="34" alt="logo" />
          </Link>

          <nav className={s.navigation}>
            <ul className={s.list}>
              <li className={s.item}>
                <Link className={s.itemLink} href="/news">
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
              <Link
                href="https://www.instagram.com/andrew_20o4/"
                target="blank"
              >
                <Image
                  src="/icons/insta.svg"
                  width="36"
                  height="36"
                  alt="instagram"
                />
              </Link>
            </li>
            <li className={s.socialItem}>
              <Link
                href="https://www.youtube.com/channel/UCRbxBL778RAyhfyILogesLA"
                target="blank"
              >
                <Image
                  src="/icons/youtube.svg"
                  width="36"
                  height="36"
                  alt="youtube"
                />
              </Link>
            </li>
            <li className={s.socialItem}>
              <Link href="https://t.me/Monoliz1503" target="blank">
                <Image
                  src="/icons/telegram.svg"
                  width="36"
                  height="36"
                  alt="telegram"
                />
              </Link>
            </li>
          </ul>

          <button
            className={`${s.sidebarBtn} ${isOpen ? s.active : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`${s.menu} ${isOpen ? s.menuOpen : ""}`}>
        <nav className={s.mobileNav}>
          <ul>
            <li>
              <Link href="/news" onClick={toggleMenu}>
                Новини
              </Link>
            </li>
            <li>
              <Link href="#" onClick={toggleMenu}>
                Клуби
              </Link>
            </li>
            <li>
              <Link href="#" onClick={toggleMenu}>
                Блог
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
