"use client";
import { useEffect, useRef, useState,useCallback, Children } from "react";
import s from "./gallery.module.css";
import Slider from "../slider";
import Image from "next/image";

export default function InfiniteGallery({ className, children, imgsGallery }) {
  const trackRef = useRef(null); // Тепер ми рухаємо цей трек
  const timerRef = useRef(null);
  const xRef = useRef(0); // Поточна позиція в пікселях (через ref, щоб не було зайвих рендерів)
  const [selectedId, setSelectedId] = useState(null);

  const handlePhotoClick = useCallback(
    (e) => {
      const target = e.target;
      if (target) {
        const id = Number(target.getAttribute("data-photo-id"));
        setSelectedId(id);
      }
    },
    []
  );

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const moveGallery = (delta) => {
    if (!trackRef.current) return;

    xRef.current += delta;

    // Перевірка безкінечності (половина ширини треку)
    const halfWidth = trackRef.current.scrollWidth / 2;

    // Якщо пішли занадто вліво
    if (Math.abs(xRef.current) >= halfWidth) {
      xRef.current = 0;
    }
    // Якщо тягнемо вправо за межі нуля
    else if (xRef.current > 0) {
      xRef.current = -halfWidth;
    }

    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  };

  const startAutoScroll = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      if (!isDown) {
        moveGallery(-1); // Рух вліво по 1px
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [isDown]);

  return (
    <>
      {/* GALLARY */}
      <div onClick={handlePhotoClick}>
        <div
          className={s.gallary}
          onMouseDown={(e) => {
            setIsDown(true);
            setStartX(e.pageX - xRef.current);
            stopAutoScroll();
            trackRef.current.style.cursor = "grabbing";
          }}
          onMouseUp={() => {
            setIsDown(false);
            trackRef.current.style.cursor = "grab";
          }}
          onMouseLeave={() => {
            setIsDown(false);
            startAutoScroll();
          }}
          onMouseMove={(e) => {
            if (!isDown) {
              stopAutoScroll();
              return;
            }
            const currentMouseX = e.pageX;
            const newX = currentMouseX - startX;

            // Різниця між минулим і новим положенням для безкінечності
            const delta = newX - xRef.current;
            moveGallery(delta);
          }}
          onMouseEnter={() => {
            stopAutoScroll();
            trackRef.current.style.cursor = "grab";
          }}
        >
          <ul
            ref={trackRef} // Ось де тепер стоїть Ref
            className={`${className} ${s.track}`}
            style={{ willChange: "transform" }} // Підказка браузеру для GPU
          >
            {Children.map(children, (child) => (
              <li className={s.item}>{child}</li>
            ))}
            {Children.map(children, (child, id) => (
              <li className={s.item}>{child}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* SLIDER */}
      <Slider currentId={selectedId} setCurrentId={setSelectedId}>
        {imgsGallery.map((img) => (
          <Image
            src={img.src}
            fill
            sizes="(max-width: 768px) 50vw, 90vw"
            alt="img"
          />
        ))}
      </Slider>
    </>
  );
}
