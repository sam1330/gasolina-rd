import React from "react";
import { ILabelProps } from "./labelType";

const Label = ({ children, htmlFor = '' }: ILabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {children}
    </label>
  );
};

export default Label;
