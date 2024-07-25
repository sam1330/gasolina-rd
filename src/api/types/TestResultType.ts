export interface ITestResult {
    id: string,
    ron: number,
    plumb: number,
    sulfur: number,
    color: string,
    observations: string,
    gasType: {
        id: string,
        name: string,
    },
    establishment: {
        id: string,
        name: string,
        address: string,
    },
    date: string,
}

export type TestResultFilters = {
    search: string,
    gasType: string,
    city: string,
    dateRange: string,
}