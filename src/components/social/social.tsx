import * as React from "react";

const Social = (): JSX.Element => {
  return (
    <div className="social">
      <p className="social__title">Наши соцсети:</p>

      <ul className="social__list">
        <li className="social__item social__item--telegram">Telegram</li>
        <li className="social__item social__item--dzen">Yandex-dzen</li>
        <li className="social__item social__item--vk">VK</li>
      </ul>
    </div>
  )
};

export default Social;