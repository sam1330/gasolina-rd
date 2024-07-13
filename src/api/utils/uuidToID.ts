import Connection from "../database/Connection";

export const convertUuidToID = async (tableName: string, uuid: string) => {
    const [response] = await Connection.instance.query(`SELECT id FROM ${tableName} WHERE uuid = '${uuid}';`);
    const responseArray = response as Array<{id: number} | null>;

    if (responseArray.length === 0) return null;
    
    return responseArray[0]?.id;
};

