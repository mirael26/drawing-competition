import * as React from "react";

import { ButtonBorder, ButtonColors, ButtonSizes } from "../../../types";

interface ButtonProps {
  color?: ButtonColors,
  size?: ButtonSizes,
  text: string,
  shadow?: boolean,
  border?: ButtonBorder,
  animation?: 'toSimple',
}

const Button = ({color = 'main', size = 'normal', text, shadow, border, animation}: ButtonProps): JSX.Element => {
  return (
    <div className={`button button--${color} button--${size}${shadow ? ' button--shadow' : ''}${border ? ` button--border-${border}` : ''}${animation ? ` ${animation}` : ''}`}>
      {text}
    </div>
  )
};

export default Button;