import * as React from "react";

import MainNav from "../main-nav/main-nav";
import Social from "../social/social";

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <Social />
        </div>

        <div className="footer__nav">
          <MainNav />
        </div>

        <div className="footer__up">
          <p className="footer__up-text">Наверх</p>
          <button className="footer__up-button"></button>
        </div>

        <p className="footer__copyright">@ Все права защищены.  ООО”Слонум” 2022</p>
      </div>
    </div>
  )
};

export default Footer;