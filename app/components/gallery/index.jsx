"use client";
import { useEffect, useRef, useState,useCallback, Children } from "react";
import s from "./gallery.module.css";
import Slider from "../slider";
import Image from "next/image";

export default function InfiniteGallery({ className, children, imgsGallery }) {
  const trackRef = useRef(null); // Тепер ми рухаємо цей трек
  const timerRef = useRef(null);
  const xRef = useRef(0); // Поточна позиція в пікселях (через ref, щоб не було зайвих рендерів)
  const clickStartXRef = useRef(0);
  const [selectedId, setSelectedId] = useState(null);

  const handlePhotoClick = useCallback((e) => {
    const dragDistance = Math.abs(e.pageX - clickStartXRef.current);
    if (dragDistance > 5) return;

    const target = e.target.closest("[data-photo-id]");
    if (target) {
      const id = Number(target.getAttribute("data-photo-id"));
      setSelectedId(id);
    }
  }, []);

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

  const startAutoScroll = useCallback(() => {
  if (!isDown) {
    moveGallery(-1); // Твоя функція руху
  }
  timerRef.current = requestAnimationFrame(startAutoScroll);
}, [isDown]);

const stopAutoScroll = useCallback(() => {
  if (timerRef.current) {
    cancelAnimationFrame(timerRef.current);
    timerRef.current = null;
  }
}, []);

// Один useEffect для керування циклом
useEffect(() => {
  timerRef.current = requestAnimationFrame(startAutoScroll);
  return () => stopAutoScroll();
}, [startAutoScroll, stopAutoScroll]);

  return (
    <>
      {/* GALLARY */}
      <div onClick={handlePhotoClick}>
        <div
          className={s.gallary}
          onMouseDown={(e) => {
            setIsDown(true);
            clickStartXRef.current = e.pageX; // Запам'ятовуємо, де натиснули
            setStartX(e.pageX - xRef.current);
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
            if (!isDown) return;
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
      {selectedId !== null && (
        <Slider currentId={selectedId} setCurrentId={setSelectedId}>
          {imgsGallery.map((img) => (
            <Image
              src={img.src}
              fill
              priority={img.id === selectedId} // Це змусить браузер вантажити її першою
              loading={img.id === selectedId ? "eager" : "lazy"} // Явне вказання
              sizes="100vw"
              alt="img"
              quality={80} // 100% якості не потрібно, 80 — золота середина
            />
          ))}
        </Slider>
      )}
    </>
  );
}
