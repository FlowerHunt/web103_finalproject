import {pool} from './database.js'
import './dotenv.js'
// import { fileURLToPath } from 'url'
// import path, { dirname } from 'path'
// import fs from 'fs'

// const currentPath = fileURLToPath(import.meta.url);




const createUserTable = async () => {
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(255) NOT NULL,
            user_role VARCHAR(150) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_gallery JSONB
       
        );
    `
    try {
  const res = await pool.query(createUsersTableQuery)
  console.log('🎉 users table created successfully')
    } catch (err) {
        console.error('❌ Error creating users table:', err)
    }

}

const createFlowerTable = async () => {
  const createFlowerTableQuery = `
        CREATE TABLE IF NOT EXISTS flowers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            flower_family VARCHAR(100),
            flower_meaning VARCHAR(255),
            image_url VARCHAR(255)
        );
    `
    try {
        const res = await pool.query(createFlowerTableQuery);
        console.log("🎉 flowers table created successfully");
    } catch (err) {
        console.error("❌ Error creating flowers table:", err);
    }
}






createUserTable()
createFlowerTable()









