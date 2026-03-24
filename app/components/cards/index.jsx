import Link from "next/link";
import s from "./cards.module.css";
import Image from "next/image";

export const CardNews = ({ img, text, date, link, className }) => {
  return (
    <Link className={`${s.link} ${className ?? ""}`} href={'/news/'+link}>
      <div className={s.img_wrap}>
        <Image
          src={img}
          width="300"
          height="300"
          sizes="(max-width: 768px) 50vw, 400px"
          alt={text}
        />
        <h4 className={s.desc}>{text}</h4>
      </div>
      <h4 className={s.mobile_desc}>{text}</h4>
      <small className={s.date}>{date}</small>
    </Link>
  );
};

export const CardBlogFlex = ({ img, date, title, desc, link }) => {
  return (
    <div className={s.blog_card}>
      <div className={s.blog_cntnt}>
        <Image className={s.blog_img} src={img} width={300} height={170} alt={title} />
        <div className={s.blog_text}>
          <small className={s.blog_date}>{date}</small>
          <h3 className={s.blog_title}>{title}</h3>
          <p className={s.blog_desc}>{desc}</p>
        </div>
      </div>
      <a href={link}>
        <button className={s.blog_button}>Переглянути</button>
      </a>
    </div>
  )
}
