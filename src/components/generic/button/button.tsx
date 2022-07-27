import * as React from "react";

import { ButtonColors, ButtonSizes } from "../../../types";

interface ButtonProps {
  color?: ButtonColors,
  size?: ButtonSizes,
  text: string,
  shadow?: boolean,
  borderColor?: string,
}

const Button = ({color = 'main', size, text, shadow, borderColor}: ButtonProps): JSX.Element => {
  const border = borderColor ? `1px solid ${borderColor}` : 'none';

  return (
    <div className={`button button--${color} button-${size}${shadow ? ' button--shadow' : ''}${borderColor ? ' button--border' : ''}`}
      style={{border: border}}>
      {text}
    </div>
  )
};

export default Button;