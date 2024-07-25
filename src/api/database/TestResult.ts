import { ITestResult, TestResultFilters } from "../types/TestResultType";
import { convertUuidToID } from "../utils/uuidToID";
import Connection from "./Connection";
import { v4 as uuidv4 } from "uuid";

class TestResult {
  private constructor() {}

  public static async getTestResults(filters: TestResultFilters): Promise<Array<ITestResult>> {

    const [testResults] = await Connection.instance.query(
      `SELECT 
      test_results.*, gas_types.name as gas_type_name, establishments.name as establishment_name, establishments.address as establishment_address
      FROM test_results 
      INNER JOIN gas_types ON test_results.gas_type_id = gas_types.id 
      INNER JOIN establishments ON test_results.establishment_id = establishments.id 
      WHERE 
        (gas_types.id = IFNULL(?, gas_types.id))
        AND (establishments.city_id = IFNULL(?, establishments.city_id))
        AND (test_results.date >= IFNULL(?, test_results.date)) -- Assuming date is stored in a date column
        AND (test_results.date <= IFNULL(?, test_results.date))
        AND (establishments.name LIKE IFNULL(CONCAT('%', ?, '%'), establishments.name))
        AND (establishments.address LIKE IFNULL(CONCAT('%', ?, '%'), establishments.address))
      ORDER BY date DESC;`,
        [
          filters.gasType ? await convertUuidToID("gas_types", filters.gasType) : null, // GAS_TYPE
          filters.city ? await convertUuidToID("cities", filters.city) : null, // CITY
          filters.dateRange ? filters.dateRange[0] : null, // START_DATE
          filters.dateRange ? filters.dateRange[1] : null, // END_DATE
          `%${filters.search}%`, // ESTABLISHMENT_NAME
          `%${filters.search}%` // ESTABLISHMENT_ADDRESS
        ]
    );

    return testResults as Array<ITestResult>;
  }

  public static async createTestResult(data: any): Promise<string> {
    const uuid = uuidv4();

    await Connection.instance.query(
      `INSERT INTO test_results (uuid, establishment_id, gas_type_id, date, ron, plumb, sulfur, color, observations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        uuid,
        await convertUuidToID("establishments", data.establishment_id),
        await convertUuidToID("gas_types", data.gas_type_id),
        data.date,
        data.ron,
        data.plumb,
        data.sulfur,
        data.color,
        data.observations,
      ]
    );

    return 'Test Result created successfully';
  }
}

export default TestResult;
