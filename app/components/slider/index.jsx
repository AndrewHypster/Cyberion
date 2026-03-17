"use client";

import s from "./slider.module.css";
import React, { Children, useState, useEffect, useRef } from "react";

const Slider = ({ children, currentId, setCurrentId }) => {
  const totalItems = React.Children.count(children);

  const prev = () => {
    setCurrentId((p) => (p > 0 ? p - 1 : totalItems - 1));
  };

  const next = () => {
    setCurrentId((p) => (p < totalItems - 1 ? p + 1 : 0));
  };

  useEffect(() => {
    if (currentId === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setCurrentId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentId, prev, next, setCurrentId]);

  useEffect(() => {
    if (currentId != null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [currentId]);

  return (
    <div className={`${s.slider} ${currentId !== null ? s.open : ""}`}>
      <button className={s.close} onClick={() => setCurrentId(null)}>
        X
      </button>
      <button
        className={`${s.btn} ${s.prev}`}
        onClick={prev}
        aria-label="Попередній слайд"
      >
        &lt;
      </button>
      <button
        className={`${s.phone_btn} ${s.phone_prev}`}
        onClick={prev}
        aria-label="Попередній слайд"
      ></button>
      <ul className={s.list} style={{ "--index": -currentId }}>
        {Children.map(children, (child) => (
          <li className={s.item}>{child}</li>
        ))}
      </ul>
      <button
        className={`${s.phone_btn} ${s.phone_next}`}
        onClick={next}
        aria-label="Наступний слайд"
      ></button>
      <button
        className={`${s.btn} ${s.next}`}
        onClick={next}
        aria-label="Наступний слайд"
      >
        &gt;
      </button>
    </div>
  );
};

const MotionSlider = ({ children, className }) => {
  const [current, setCurrent] = useState(0);
  const count = Children.count(children);
  const intervalId = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % count);
  const prev = () => setCurrent((prev) => (prev - 1 + count) % count);

  const mouseEnter = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  const mouseLeave = () => {
    intervalId.current = setInterval(() => {
      next();
    }, 5000);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      next();
    }, 3000);

    return () => {
      clearInterval(intervalId.current);
      intervalId.current = null;
    };
  }, []);

  return (
    <section className={`${s.motion_slider} ${className ?? ""}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <button className={s.motion_prev} onClick={prev}>
        &lt;
      </button>

      <div
        className={s.list_container}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <ul
          className={s.motion_list}
          style={{
    "--index": current,
            display: "flex",
            transition: "0.5s ease",
          }}
        >
          {Children.map(children, (child, id) => (
            <li
              className={`${s.motion_item} ${
                current === id ? s.motion_current : ""
              }`}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>

      <div className={s.motion_pagination}>
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`${s.motion_dot} ${current === i ? s.active_dot : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <button className={s.motion_next} onClick={next}>
        &gt;
      </button>
    </section>
  );
};

export { Slider, MotionSlider };
