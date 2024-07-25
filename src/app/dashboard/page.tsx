'use client';

import Filters from "@/components/layout/Filters";
import Menu from "./components/Menu";
import ResultCard from "@/components/layout/ResultCard";
import { useState } from "react";

const results = [
  {
    id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
    ron: 95.3,
    plumb: 0.002,
    sulfur: null,
    color: "Amarillo",
    observations:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gasType: {
      id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
      name: "Gasoil Premium",
    },
    establishment: {
      id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
      name: "Shell luperon",
      address: "Av. Juan B. Justo 1234",
    },
    date: "2022-01-24",
  },
  {
    id: "defc7a3e-a980-46d9-9d16-480fe41ec49b",
    ron: 91.3,
    plumb: 0.002,
    sulfur: null,
    color: "Amarillo",
    observations:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gasType: {
      id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
      name: "Gasolina Regular",
    },
    establishment: {
      id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
      name: "Shell luperon",
      address: "Av. Juan B. Justo 1234",
    },
    date: "2022-01-24",
  },
  {
    id: "42dw9sc-3859-4e25-8965-bb8147a656ad",
    ron: 94.3,
    plumb: 0.002,
    sulfur: null,
    color: "Amarillo",
    observations:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gasType: {
      id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
      name: "Gasolina Premium",
    },
    establishment: {
      id: "43c93b5c-3859-4e25-8965-bb8147a656ad",
      name: "Shell luperon",
      address: "Av. Juan B. Justo 1234",
    },
    date: "2022-01-24",
  },
];

export default function Dashboard() {

  const [filters, setFilters] = useState({
    search: '',
    gasType: '',
    dateRange: '',
    city: '',
    establishment: '',
  });

  return (
    <main>
      <Menu />
      <div className="p-6 mt-6 flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Filters filters={filters} setFilters={setFilters}/>
          <div className="px-12">
            <ResultCard results={results} />
          </div>
        </div>
      </div>
    </main>
  );
}
