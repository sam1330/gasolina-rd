import { ISelectProps } from "./selectType";

const Select = ({
  name,
  id,
  className = "",
  value = "",
  onChange = () => {},
  options,
}: ISelectProps) => {
  return (
    <div className={className}>
      <select
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        autoComplete="country-name"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
