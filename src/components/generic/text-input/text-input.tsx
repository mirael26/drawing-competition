import * as React from "react";

interface TextInputProps {
  type?: 'text' | 'number' | 'password' | 'email' | 'tel',
  value?: string,
  placeholder?: string,
};

const TextInput = ({type = 'text', value = '', placeholder = ''}: TextInputProps): JSX.Element => {
  return (
    <input className="text-input" type={type} value={value} placeholder={placeholder}/>
  )
};

export default TextInput;