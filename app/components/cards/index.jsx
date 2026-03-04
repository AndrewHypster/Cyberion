import Link from "next/link";
import s from "./style.module.css";
import Image from "next/image";

export const CardNews = ({ img, text, date, link, className }) => {
  return (
    <Link className={`${s.link} ${className ?? ""}`} href={link}>
      <div className={s.img_wrap}>
        <Image src={img} width="300" height="300" alt={text} />
        <h4 className={s.desc}>{text}</h4>
      </div>
      <h4 className={s.mobile_desc}>{text}</h4>
      <small className={s.date}>{date}</small>
    </Link>
  );
};
