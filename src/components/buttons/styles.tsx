import styled from "styled-components";

export type StyledButtonProps = {
  rounded: boolean;
  outline: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-weight: 600;
  color: #272c33;
  vertical-align: middle;
  font-size: 0.8125rem;
  line-height: 1.5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: "Exo 2", "Helvetica Neue", Arial, sans-serif;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => {
    return props.rounded ? "100px" : "0.25em";
  }};

  opacity: ${(props) => {
    return props.disabled ? ".65" : "1";
  }};

  &:active {
    box-shadow: inset 0 3px 5px rgb(39 44 51 / 13%);
  }
`;

export const WhiteButton = styled(StyledButton)`
  color: #212529;
  background-color: #fff;
  border-color: #fff;
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
    0 1px 1px rgb(39 44 51 / 8%);
    cursor: pointer;
  &:hover {
    background-color: #ececec;
    border-color: #e6e6e6;
  }

  &:focus {
    background-color: #ececec;
    border-color: #e6e6e6;
    box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
      0 1px 1px rgb(39 44 51 / 8%), 0 0 0 1px rgb(222 222 223 / 50%);
  }

  &:active {
    background-color: #e6e6e6;
    border-color: #dfdfdf;
    color: #212529;
  }
`;

export const WhiteButtonOtline = styled(StyledButton)`
  color: ${(props) => {
    return props.outline ? "#fff" : "#5567ff";
  }};

  background-color: ${(props) => {
    return props.outline ? "transparent" : "#fff";
  }};
  cursor: pointer;
  border-color: #fff;
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
    0 1px 1px rgb(39 44 51 / 8%);

  &:hover {
    background-color: #fff;
    border-color: #fff;
    color: #5567ff;
  }

  &:focus {
    background-color: #ffffff;
    border-color: #fff;
    color: #5567ff;
    box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
      0 1px 1px rgb(39 44 51 / 8%), 0 0 0 1px rgb(222 222 223 / 50%);
  }

  &:active {
    background-color: #fff;
    border-color: #fff;
    color: #5567ff;
  }
`;

export const AccentButton = styled(StyledButton)`
  color: ${(props) => {
    return props.outline ? "#ed0b4c" : "#fff";
  }};

  background-color: ${(props) => {
    return props.outline ? "transparent" : "#ed0b4c";
  }};

  border-color: #ed0b4c;
  box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
    0 1px 1px rgb(39 44 51 / 8%);

  &:not(.disabled):hover {
    background-color: #c80940;
    color: #fff;
    border-color: #bc093c;
  }

  &:focus {
    box-shadow: inset 0 1px 0 hsl(0deg 0% 100% / 15%),
      0 1px 1px rgb(39 44 51 / 8%), 0 0 0 1px rgb(240 48 103 / 50%);
  }

  &:active {
    background-color: #bc093c;
    color: #fff;
    border-color: #b00838;
  }
`;