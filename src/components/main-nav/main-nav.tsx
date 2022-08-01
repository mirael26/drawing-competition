import * as React from "react";

const MainNav = (): JSX.Element => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item"><a href='#' className="main-nav__link">Главная</a></li>
        <li className="main-nav__item"><a href='#' className="main-nav__link">Личный кабинет</a></li>
        <li className="main-nav__item"><a href='#' className="main-nav__link">Контакты</a></li>
        <li className="main-nav__item"><a href='#' className="main-nav__link">Конфиденциальность</a></li>
      </ul>
    </nav>
  )
};

export default MainNav;