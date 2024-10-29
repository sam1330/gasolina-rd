import { TEstablishmentCatalog } from "@/api/types/EstablishmentType";
import { useEffect, useState } from "react";

export const useGetEstablishmentsCatalog = () => {
  const [establishments, setEstablishments] = useState<Array<TEstablishmentCatalog>>([]);

  const getEstablishmentsCatalog = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/establishments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query GetEstablishments { establishments { value: uuid label: name } }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEstablishments(data.data.establishments);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEstablishmentsCatalog();
  }, []);

  return {
    establishments: establishments,
  };
};
