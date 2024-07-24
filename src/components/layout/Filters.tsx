"use client";

import ReactSelect from "react-select";
import SearchBar from "../base/SearchBar";
import { useGetGasTypesCatalog } from "../hooks/useGasTypes";
import { useGetEstablishmentsCatalog } from "../hooks/useEstablishment";

const Filters = () => {
  const { gasTypes } = useGetGasTypesCatalog();
  const { establishments } = useGetEstablishmentsCatalog();

  return (
    <div className="p-4 flex justify-center border rounded-xl drop-shadow-sm">
      <div className="d-inline-block w-[26em] mr-4">
        <ReactSelect
          placeholder="Establecimiento"
          classNames={{
            control: () => "w-[26em] rounded-lg",
          }}
          options={establishments}
        />
      </div>
      <div className="d-inline-block w-[20em] mr-4">
        <ReactSelect
          placeholder="Tipo de combustible"
          classNames={{
            control: () => "w-full rounded-lg",
          }}
          options={gasTypes}
        />
      </div>
      <div className="d-inline-block w-[20em]">
        <ReactSelect
          placeholder="Provincia"
          classNames={{
            control: () => "w-full rounded-lg",
          }}
          options={gasTypes}
        />
      </div>
    </div>
  );
};

export default Filters;
