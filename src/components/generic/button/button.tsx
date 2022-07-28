import * as React from "react";

import { ButtonBorder, ButtonColors, ButtonSizes } from "../../../types";

interface ButtonProps {
  color?: ButtonColors,
  size?: ButtonSizes,
  text: string,
  shadow?: boolean,
  border?: ButtonBorder,
}

const Button = ({color = 'main', size, text, shadow, border}: ButtonProps): JSX.Element => {

  return (
    <div className={`button button--${color} button-${size}${shadow ? ' button--shadow' : ''}${border ? ` button--border-${border}` : ''}`}>
      {text}
    </div>
  )
};

export default Button;