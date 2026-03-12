'use client'

import s from './slider.module.css'
import { Children } from 'react'
import React, { useState, useEffect } from "react";

const Slider = ({ children, currentId, setCurrentId }) => {
  const totalItems = React.Children.count(children);

  const prev = () => {
    setCurrentId((p) => (p > 0 ? p - 1 : totalItems-1));
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

  return (
    <div className={`${s.slider} ${currentId !== null ? s.open : ""}`}>
      <button className={s.close} onClick={() => setCurrentId(null)}>
        X
      </button>
      <button className={`${s.btn} ${s.prev}`} onClick={prev}>
        &lt;
      </button>
      <div
        className={`${s.phone_btn} ${s.phone_prev}`}
        onClick={prev}
      ></div>
      <ul className={s.list} style={{ "--index": -currentId }}>
        {Children.map(children, (child) => (
          <li className={s.item}>{child}</li>
        ))}
      </ul>
      <div
        className={`${s.phone_btn} ${s.phone_next}`}
        onClick={next}
      ></div>
      <button className={`${s.btn} ${s.next}`} onClick={next}>
        &gt;
      </button>
    </div>
  );
};

export default Slider