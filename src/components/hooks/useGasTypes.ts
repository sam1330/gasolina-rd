import { TGasTypeCatalog } from "@/api/types/GasTypeType";
import { useEffect, useState } from "react";

export const useGetGasTypesCatalog = () => {
  const [gasTypes, setGasTypes] = useState<Array<TGasTypeCatalog>>([]);

  const getGasTypesCatalog = async () => {
    await fetch(`https://gasolina-rd.onrender.com/gas_types`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query GetGasTypes { gas_types { value: uuid label: name } }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGasTypes(data.data.gas_types);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getGasTypesCatalog();
  }, []);

  return {
    gasTypes,
  };
};
