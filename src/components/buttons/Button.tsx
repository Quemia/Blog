import React, { FunctionComponent } from "react";
import {
  WhiteButton,
  AccentButton,
} from "./styles";

export type ButtonProps = {
  color: string;
  text: string;
  outline: boolean;
  rounded: boolean;
  disabled: boolean;
  className?: string;
  onClick: (e: any) => void;
  style?: any;
};

const Button: FunctionComponent<ButtonProps> = ({
  color = "white",
  text,
  outline = false,
  rounded = false,
  disabled = false,
  className,
  onClick,
  style = {}
}) => {
  const buttonProps = {
    color,
    outline,
    rounded,
    disabled,
    className,
    onClick,
    style,
  };

  switch (color) {
    case "white": {
      return <WhiteButton {...buttonProps}>{text}</WhiteButton>;
    }
    case "accent": {
      return <AccentButton {...buttonProps}>{text}</AccentButton>;
    }
    default:
      return <WhiteButton {...buttonProps}>{text}</WhiteButton>;
  }
};

export { Button };

export default Button;
