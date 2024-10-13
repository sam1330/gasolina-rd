import City from "../../database/City";
import { ICity } from "@/api/types/CityType";


const cityResolver = {
    cities: (): Promise<ICity[]> => {
        return City.getCities();
    },
};

export default cityResolver;