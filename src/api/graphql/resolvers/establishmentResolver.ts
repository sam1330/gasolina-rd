import Establishment from "../../database/Establishment";
import { IEstablishment } from "@/api/types/EstablishmentType";

const establishmentResolver = {
    establishments: (): IEstablishment[] => {
        return Establishment.getEstablishments();
    },
};

export default establishmentResolver;