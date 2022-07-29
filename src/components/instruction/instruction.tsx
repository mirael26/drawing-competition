import * as React from "react";

const Instruction = (): JSX.Element => {
  return (
    <div className="instruction">
      <h2 className="instruction__title">Пошаговый <span className="instruction__title instruction__title--accent">план</span></h2>
      <ol className="instruction__list">
        <li className="instruction__item">
          <div className="instruction__number">1</div>
          <p className="instruction__text">Зарегистрируйтесь на конкурс <a className="instruction__link" href="#">Здесь</a></p>
        </li>

        <li className="instruction__item">
          <div className="instruction__number">2</div>
          <p className="instruction__text">Выполните все условия конкурса</p>
        </li>

        <li className="instruction__item">
          <div className="instruction__number">3</div>
          <p className="instruction__text">Загрузите рисунок <a className="instruction__link" href="#">Здесь</a> или в Личном кабинете</p>
        </li>
      </ol>
    </div>
  )
};

export default Instruction;