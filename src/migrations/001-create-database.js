const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");

async function createDatabbase() {
    const connection = await mysql.createConnection({
        host: databaseconfig.host,
        user: databaseconfig.user,
        password: databaseconfig.password,
    });

    await connection.query(

    )
};