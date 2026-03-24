import Baner from "@/app/components/baner";
import s from "./blog.module.css";
import { MotionSlider } from "@/app/components/slider";
import Image from "next/image";
import { CardBlogFlex } from "@/app/components/cards";

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

      <ul className={s.cards}>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
        <li>
          <CardBlogFlex
            img="/imgs/gallery-0.jpg"
            date="13.03.2026 18:00"
            title="Грандфінал Ігор Ветеранів 2025: більше, ніж турнір"
            desc="Вже другий рік поспіль за ініціативи Міністерства у справах ветеранів України та за підтримки CYBERION відбуваються Ігри Ветеранів — подія, у якій кіберспорт виходить далеко за межі змагання. Це не просто турнір з Dota 2 та Counter-Strike. Це простір, де ветерани та військовослужбовці знову відчувають команду, підтримку й той самий драйв, до якого звикли у […]"
            link="/grandfinal-igor-veteraniv-2025-bilshe-nizh-turnir"
          />
        </li>
      </ul>
    </main>
  );
};

export default Blog;
