const { Client } = require('pg');

const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
});

const createDB = async () => {
    try {
        await client.connect();
        await client.query("CREATE DATABASE beeteller");
        console.log('Database criada com sucesso');
    } catch (err) {
        console.log('Database já existente')
    } finally {
        await client.end();
    }
}

module.exports = createDB
