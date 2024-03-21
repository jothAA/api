const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createProductTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS product (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        descricao VARCHAR(255) NOT NULL,
        quantidadeEstoque VARCHAR(255) NOT NULL,
        unidadeMedida VARCHAR(255) NOT NULL,
        valorUnidade VARCHAR(255) NOT NULL
    )`);

    await connection.end();

    console.log("Table product created!");
  } catch (error) {
    console.log(`Error creating table Product: ${error}`);
  }
}

createProductTable();