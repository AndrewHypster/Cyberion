'use client'

import s from './slider.module.css'
import { Children } from 'react'
import React, { useState, useEffect } from "react";

const Slider = ({ children, currentId, setCurrentId }) => {
  const totalItems = React.Children.count(children);

  const prev = () => {
    setCurrentId((p) => (p > 0 ? p - 1 : p));
  };

  const next = () => {
    setCurrentId((p) => (p < totalItems - 1 ? p + 1 : p));
  };

  useEffect(() => console.log(currentId), [currentId]);

  return (
    <div className={`${s.slider} ${!!currentId & currentId >= 0 ? s.open : ""}`}>
      <button className={s.close} onClick={() => setCurrentId(null)}>X</button>
      <button className={`${s.btn} ${s.prev}`} onClick={() => prev()}>
        &lt;
      </button>
      <div
        className={`${s.phone_btn} ${s.phone_prev}`}
        onClick={() => prev()}
      ></div>
      <ul className={s.list} style={{ "--index": -currentId }}>
        {Children.map(children, (child) => (
          <li className={s.item}>{child}</li>
        ))}
      </ul>
      <div
        className={`${s.phone_btn} ${s.phone_next}`}
        onClick={() => next()}
      ></div>
      <button className={`${s.btn} ${s.next}`} onClick={() => next()}>
        &gt;
      </button>
    </div>
  );
};

export default Slider