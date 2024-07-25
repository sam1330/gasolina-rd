export interface ITestResult {
    id: string,
    ron: number,
    plumb: number,
    sulfur: number,
    color: string,
    observations: string,
    gas_type_name: string,
    establishment_name: string,
    establishment_address: string,
    date: string,
}

export type TestResultFilters = {
    search: string,
    gasType: string,
    city: string,
    dateRange: string,
}