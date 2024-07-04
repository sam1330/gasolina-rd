'use client';

import SearchBar from "@/components/base/SearchBar";
import { useEffect } from "react";


const MainContent = () => {

  useEffect(() => {
    (() => {
      fetch("http://localhost:4000/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: `query GetCharacters { characters { id name } }` }),
      }).then((response) => {
        console.log(response);
      });
    })();
  }, []);
  return (
    <>
      <div id="banner" className="w-full h-[80vh] bg-[url(/assets/banner1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-[80vh] bg-neutral-500 bg-gradient-to-b from-neutral-600 to-neutral-700 absolute opacity-55"></div>
        <SearchBar />
      </div>
    </>
  );
};

export default MainContent;
