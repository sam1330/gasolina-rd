export interface IEstablishment {
    id: number;
    uuid: string;
    name: string;
    address: string;
}

export type TEstablishmentCatalog = {
    value: string;
    label: string;
}