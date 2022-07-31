import * as React from "react";

const RepostDiscount = (): JSX.Element => {
  return (
    <div className="repost-discount">
      <div className="repost-discount__decor-label">
          <h3 className="repost-discount__title">Скидка за репост</h3>
        </div>

      <div className="repost-discount__body">

        <p className="repost-discount__text">Стоимость участия:</p>

        <div className="repost-discount__price">
          <p className="repost-discount__new-price">149₽</p>
          <p className="repost-discount__old-price">299₽</p>
        </div>

        <p className="repost-discount__text">При наличии репоста в соцсетях :&#41;</p>
      </div>

      <div className="repost-discount__footer">
        <p className="repost-discount__footer-text">Получить скидку:</p>
        <a className="repost-discount__social repost-discount__social--vk" href="№">Вконтакте</a>
        <a className="repost-discount__social repost-discount__social--ok" href="№">Одноклассники</a>
      </div>
    </div>
  )
};

export default RepostDiscount;