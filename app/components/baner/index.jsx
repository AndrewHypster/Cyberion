import Image from 'next/image';
import s from './baner.module.css'

const Baner = ({ img, text, className }) => {
  return (
    <div className={`${s.baner} ${className??''}`}>
      <h1 className={s.title}>{text}</h1>
      <Image
        src={img}
        alt="Банер"
        width={2048}
        height={363}
        priority
        sizes="100vw"
        className={s.img}
      />
    </div>
  );
}

export default Baner