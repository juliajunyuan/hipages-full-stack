import mysql, { ConnectionOptions } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const connectOptions: ConnectionOptions = {
    // host: process.env.MYSQL_HOST,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_ROOT_PASSWORD,
    // database: process.env.DATABASE,
    host: "127.0.0.1",
    user: "root",
    password: "juliaSimon12",
    database: "hipages",
}

const pool = mysql.createPool(connectOptions).promise();


const getJobs = async () => {
    // query database
    const [rows] = await pool.query('SELECT * FROM jobs');
    return rows;
}

const getJobById = async (id) => {
    const [rows] = await pool.query(`
    SELECT * FROM jobs WHERE id = ?`, [id])
    return rows[0];
}

export { getJobs, getJobById };