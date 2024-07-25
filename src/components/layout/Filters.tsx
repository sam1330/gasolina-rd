"use client";

import ReactSelect from "react-select";
// import SearchBar from "../base/SearchBar";
import { useGetGasTypesCatalog } from "../hooks/useGasTypes";
import { useGetEstablishmentsCatalog } from "../hooks/useEstablishment";

interface IFiltersProps {
  filters: any;
  setFilters: any;
}

const Filters = ({filters, setFilters}: IFiltersProps) => {
  const { gasTypes } = useGetGasTypesCatalog();
  const { establishments } = useGetEstablishmentsCatalog();

  const onChangeFilters = (key: string, value: any) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-4 flex justify-center border rounded-xl drop-shadow-sm">
      <div className="d-inline-block w-[26em] mr-4">
        <ReactSelect
          placeholder="Establecimiento"
          classNames={{
            control: () => "w-[26em] rounded-lg",
          }}
          options={establishments}
          onChange={(e) => onChangeFilters("establishment", e.value)}
        />
      </div>
      <div className="d-inline-block w-[20em] mr-4">
        <ReactSelect
          placeholder="Tipo de combustible"
          classNames={{
            control: () => "w-full rounded-lg",
          }}
          options={gasTypes}
          onChange={(e) => onChangeFilters("gasType", e.value)}
        />
      </div>
      <div className="d-inline-block w-[20em]">
        <ReactSelect
          placeholder="Provincia"
          classNames={{
            control: () => "w-full rounded-lg",
          }}
          options={gasTypes}
          onChange={(e) => onChangeFilters("city", e.value)}
        />
      </div>
    </div>
  );
};

export default Filters;
