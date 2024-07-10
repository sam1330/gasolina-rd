'use client';


import { IInputProps } from "./inputTypes";


const Input = ({
  type,
  name,
  id,
  placeholder = "",
  required = false,
  className = "",
  value = "",
  onChange = () => {},
}: IInputProps) => {
  return (
    <div className="mt-2">
      <input
        type={type}
        name={name}
        id={id}
        className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
