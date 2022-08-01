import * as React from "react";

interface CheckboxAgreementProps {
  mode: 'dark' | 'light',
  id: string,
  checked?: boolean,
};

const CheckboxAgreement = ({mode, id, checked = false}: CheckboxAgreementProps): JSX.Element => {
  return (
    <div className={`checkbox-input checkbox-input--${mode}`}>
      <input className="checkbox-input__input" type="checkbox" id={id} checked={checked}/>
      <label className="checkbox-input__label" htmlFor={id}>
        Отправляя данные я соглашаюсь с <a className="checkbox-input__link" href='#'>Условиями конкурса</a> и <a className="checkbox-input__link" href='#'>Политикой обработки данных</a>
      </label>
    </div>
  )
};

export default CheckboxAgreement;