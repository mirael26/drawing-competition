import * as React from "react";

import TextInput from "../generic/text-input/text-input";
import Button from "../generic/button/button";
import CheckboxAgreement from "../checkbox-agreement/checkbox-agreement";

const Subscribe = (): JSX.Element => {
  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Подпишись на нашу рассылку</h2>
      <p className="subscribe__subtitle">Обещаем присылать только самое важное и интересное <span className="subscribe__subtitle subscribe__subtitle--strong">:&#41;</span></p>
      
      <form action="" className="subscribe__form">

      <div className="subscribe__input-block">
        <div className="subscribe__input">
          <TextInput type={'email'} placeholder={'Email'} />
        </div>

        <div className="subscribe__button-submit">
          <Button color={'main'} text={'Отправить'} />
        </div>
      </div>

      <div className="subscribe__checkbox-agreement">
        <CheckboxAgreement mode={'light'} id={'subscribe-agreement-checkbox'} checked />
      </div>

      </form>
    </div>
  )
};

export default Subscribe;