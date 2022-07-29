import * as React from "react";

const Certificate = (): JSX.Element => {
  return (
    <div className="certificate">
      <div className="certificate__info">
        <h2 className="certificate__title">Выдаём <span className="certificate__title certificate__title--accent">дипломы</span> участникам</h2>

        <p className="certificate__text">
          Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!
        </p>
        <p className="certificate__text">
          Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.
        </p>
        <p className="certificate__text">
          Со слоном к победам напролом!
        </p>

      </div>

      <img className="certificate__image" src={require("../../img/certificate.png")} alt="Пример сертификата" />
    </div>
  )
};

export default Certificate;