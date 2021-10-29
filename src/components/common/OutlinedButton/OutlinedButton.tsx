import React from "react";
import { OutlinedButton } from "./styles";
import IOutlinedButtonProps from "./types";

const OutlinedButtonComponent = (props: IOutlinedButtonProps) => {
  const { text } = props;

  return <OutlinedButton>{text}</OutlinedButton>;
};

export default OutlinedButtonComponent;
