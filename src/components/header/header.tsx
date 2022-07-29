import * as React from "react";

import Logo from "../generic/logo/logo";
import Button from "../generic/button/button";
import Timer from "../timer/timer";
import SpaceImage from "../space-image/space-image";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__header">
          <Logo />
          <div className="header__login-button">
            <Button color={'simple'} size={'small'} border={'dark'} text={'Войти'}/>
          </div>
        </div>

        <div className="header__banner">
          <p className="header__subtitle">От компании СлонУМ</p>
          <h1 className="header__title">Всероссийский конкурс Детского рисунка</h1>
          <p className="header__text">Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов</p>

          <div className="header__timer-block">
            <div className="header__join-button">
              <Button color={'main'} shadow text={'Участвовать'} />
            </div>

            <div className="header__timer">
              <Timer />
            </div>
          </div>
        </div>

        <div className="header__image">
          <SpaceImage />
        </div>
      </div>
    </div>
  )
};

export default Header;