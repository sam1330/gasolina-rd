'use client';


import Input from "./Input";
import { IInputGroupProps } from "./inputGroupType";
import Label from "./Label";


const InputGroup = ({
  id,
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
  inputComponent,
  labelComponent,
  label,
}: IInputGroupProps) => {
  return (
    <>
      {labelComponent ?? <Label>{label}</Label>}
      {inputComponent ?? (
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default InputGroup;
