
import { TCityTypeCatalog } from "@/api/types/CityType";
import { useEffect, useState } from "react";

export const useGetCitiesCatalog = () => {
  const [cities, setCities] = useState<Array<TCityTypeCatalog>>([]);

  const getCitiesCatalog = async () => {
    await fetch("http://localhost:4000/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query GetCities { cities { value: uuid label: name } }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCities(data.data.cities);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCitiesCatalog();
  }, []);

  return {
    cities: cities,
  };
};
