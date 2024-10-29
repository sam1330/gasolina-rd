import CheckIcon from "../base/Icons/CheckIcon";
import ErrorIcon from "../base/Icons/ErrorIcon";
import WarningIcon from "../base/Icons/WarningIcon";

interface IResultCardProps {
  results: Array<Result>;
}

type Result = {
  id: string;
  ron: number;
  plumb: number;
  sulfur: number | null;
  color: string;
  observations: string;
  gas_type_name: string;
  establishment_name: string;
  establishment_address: string;
  formatted_date: string;
}



const ResultCard = ({results = []}: IResultCardProps) => {
  return (
    <div className="mt-6">
      {results?.map((result) => (
        <div
          key={result.id}
          className="p-6 bg-[#F9F9F9] mb-4 border rounded-xl"
        >
          {/* STUDY INFO */}
          <div className="w-full flex justify-between flex-wrap">
            <div>
              <h2 className="text-xl font-bold">{result.establishment_name}</h2>
              <span className="text-md text-[#716A6A] d-inline-block font-medium">
                {result.establishment_address}
              </span>
            </div>
            <div>
              <p className="text-md text-[#716A6A] font-semibold">
                Fecha del estudio: {result.formatted_date}
              </p>
            </div>
          </div>
          {/* GAS TYPE */}
          <div className="mt-6 w-full flex justify-between">
            <p className="text-lg text-[#716A6A] font-semibold">
              {result.gas_type_name}
            </p>
          </div>
          {/* METRICS */}
          <div className="mt-4 w-11/12 flex justify-between flex-wrap">
            <div className="min-w-[160px]">
              <p className="text-lg text-[#716A6A] font-medium">
                Octanaje (RON): {result.ron <= 94.5 ? (<ErrorIcon />) : (<CheckIcon />)}
              </p>
              <p className="text-lg font-semibold">{result.ron ?? "N/D"}</p>
            </div>
            <div className="min-w-[160px]">
              <p className="text-lg text-[#716A6A] font-medium">
                Plomo:
              </p>
              <p className="text-lg font-semibold">{result.plumb ?? "N/D"}</p>
            </div>
            <div className="min-w-[160px]">
              <p className="text-lg text-[#716A6A] font-medium">
                Azufre:
              </p>
              <p className="text-lg font-semibold">{result.sulfur ?? "N/D"}</p>
            </div>
            <div className="min-w-[160px]">
              <p className="text-lg text-[#716A6A] font-medium">
                Color:
              </p>
              <p className="text-lg font-semibold">{result.color ?? "N/D"}</p>
            </div>
          </div>
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
