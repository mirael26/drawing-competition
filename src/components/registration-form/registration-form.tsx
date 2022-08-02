import * as React from "react";
import { useState } from "react";

import TextInput from "../generic/text-input/text-input";
import CheckboxAgreement from "../checkbox-agreement/checkbox-agreement";
import Button from "../generic/button/button";

const RegistrationForm = (): JSX.Element => {
  const [isAnimated, setIsAnimated] = useState(false);

  const onPlanesClick = () => {
    if (!isAnimated) {
      setIsAnimated(true);

      setTimeout(() => {
        setIsAnimated(false)
      }, 3000);
    }
  }

  return (
    <form className="registration-form">
      <h2 className="registration-form__title">Зарегистрируйтесь, чтобы участвовать</h2>

      <div className="registration-form__inputs">
        <TextInput placeholder={'ФИО ребенка'} />
        <TextInput placeholder={'Дата рождения'} />
        <TextInput placeholder={'Город'} />
        <TextInput type={'email'} placeholder={'Email'} />
        <TextInput type={'password'} placeholder={'Пароль'} />
      </div>

      <div className="registration-form__agreement">
        <CheckboxAgreement mode={'dark'} checked={true} id={'registration-agreement'}/>
      </div>

      <div className="registration-form__submit-button">
        <Button color={'additional-accent'} shadow text={'Участвовать'} />
      </div>

      <div className={`registration-form__paper-planes${isAnimated ? ' animated' : ''}`} onClick={onPlanesClick}>
        <div className="registration-form__paper-plane-1"></div>
        <div className="registration-form__paper-plane-2"></div>
        <div className="registration-form__paper-plane-3"></div>
      </div>
    </form>
  )
};

export default RegistrationForm;