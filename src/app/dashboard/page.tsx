import Filters from "@/components/layout/Filters";
import Menu from "./components/Menu";
import ResultCard from "@/components/layout/ResultCard";

export default function Dashboard() {
  return (
    <main>
      <Menu />
      <div className="p-6 mt-6 flex justify-center">
        <div className="w-full max-w-screen-xl">
          <Filters />
          <div className="px-12">
            <ResultCard />
          </div>
        </div>
      </div>
    </main>
  );
}
