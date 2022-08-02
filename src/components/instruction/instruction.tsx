import * as React from "react";
import { useState, useRef } from "react";

import { offset } from "../../utils";

const Instruction = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  const checkVisibility = () => {
    const block = blockRef.current;
    const blockHeight = block.offsetHeight;
    const blockOffsetY = offset(block).top;

    window.innerHeight
    window.pageYOffset

    const visibilityPoint = (window.innerHeight > blockHeight) ? blockOffsetY - (window.innerHeight - blockHeight) : blockOffsetY;

    if (window.pageYOffset > visibilityPoint) {
      console.log('докрутили')
      if (!isVisible) {
        setIsVisible(true);
      }
      window.removeEventListener('scroll', checkVisibility);
    }
  }
  
  window.addEventListener('scroll', checkVisibility);

  return (
    <div className={`instruction${isVisible ? ' visible' : ''}`} ref={blockRef}>

      <h2 className="instruction__title">Пошаговый <span className="instruction__title instruction__title--accent">план</span></h2>

      <ol className="instruction__list">
        <li className="instruction__item instruction__item--1">
          <div className="instruction__number">1</div>
          <p className="instruction__text">Зарегистрируйтесь на конкурс <a className="instruction__link" href="#">Здесь</a></p>
        </li>

        <li className="instruction__item instruction__item--2">
          <div className="instruction__number">2</div>
          <p className="instruction__text">Выполните все условия конкурса</p>
        </li>

        <li className="instruction__item instruction__item--3">
          <div className="instruction__number">3</div>
          <p className="instruction__text">Загрузите рисунок <a className="instruction__link" href="#">Здесь</a> или в Личном кабинете</p>
        </li>
      </ol>

      <div className="instruction__plane"></div>
    </div>
  )
};

export default Instruction;