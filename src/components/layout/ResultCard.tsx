import CheckIcon from "../base/Icons/CheckIcon";
import ErrorIcon from "../base/Icons/ErrorIcon";
import WarningIcon from "../base/Icons/WarningIcon";

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

const ResultCard = () => {
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };
  return (
    <div className="mt-6">
      {results.map((result) => (
        <div
          key={result.id}
          className="p-6 bg-[#F9F9F9] mb-4 border rounded-xl"
        >
          {/* STUDY INFO */}
          <div className="w-full flex justify-between">
            <div>
              <h2 className="text-xl font-bold">{result.establishment.name}</h2>
              <span className="text-md text-[#716A6A] d-inline-block font-medium">
                {result.establishment.address}
              </span>
            </div>
            <div>
              <p className="text-md text-[#716A6A] font-semibold">
                Fecha del estudio: {formatDate(result.date)}
              </p>
            </div>
          </div>
          {/* GAS TYPE */}
          <div className="mt-6 w-full flex justify-between">
            <p className="text-lg text-[#716A6A] font-semibold">
              {result.gasType.name}
            </p>
          </div>
          {/* METRICS */}
          <div className="mt-4 w-11/12 flex justify-between">
            <div>
              <p className="text-lg text-[#716A6A] font-medium">
                Octanaje (RON): <ErrorIcon />
              </p>
              <p className="text-lg font-semibold">{result.ron}</p>
            </div>
            <div>
              <p className="text-lg text-[#716A6A] font-medium">
                Plomo: <CheckIcon />
              </p>
              <p className="text-lg font-semibold">{result.plumb}</p>
            </div>
            <div>
              <p className="text-lg text-[#716A6A] font-medium">
                Azufre: <WarningIcon />
              </p>
              <p className="text-lg font-semibold">{result.sulfur ?? "N/D"}</p>
            </div>
            <div>
              <p className="text-lg text-[#716A6A] font-medium">
                Color: <ErrorIcon />
              </p>
              <p className="text-lg font-semibold">{result.color}</p>
            </div>
          </div>
          {/* <div className="mt-4 w-11/12 flex justify-between">
            
          </div> */}
          <div className="mt-4 w-11/12 flex justify-between">
            <div>
              <p className="text-lg text-[#716A6A] font-medium">
                Observaciones:
              </p>
              <p className="text-lg font-semibold">{result.observations}</p>
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default ResultCard;
