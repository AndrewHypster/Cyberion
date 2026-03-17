import Baner from "@/app/components/baner";
import s from "./blog.module.css";
import { MotionSlider } from "@/app/components/slider";
import Image from "next/image";

const Blog = () => {
  return (
    <main>
      <Baner text="Блог" img="/imgs/blog.png" className={s.baner} />
      <MotionSlider>
        <Image
          src="/imgs/gallery-0.jpg"
          width={500}
          height={300}
          sizes="(max-width: 768px) 50vw, 400px"
          alt="img"
        />
        <Image
          src="/imgs/gallery-3.jpg"
          width={500}
          height={300}
          sizes="(max-width: 768px) 50vw, 400px"
          alt="img"
        />
        <Image
          src="/imgs/gallery-5.jpg"
          width={500}
          height={300}
          sizes="(max-width: 768px) 50vw, 400px"
          alt="img"
        />
        <Image
          src="/imgs/gallery-2.jpg"
          width={500}
          height={300}
          sizes="(max-width: 768px) 50vw, 400px"
          alt="img"
        />
      </MotionSlider>
    </main>
  );
}

export default Blog