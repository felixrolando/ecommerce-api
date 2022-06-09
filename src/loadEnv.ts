import path from 'path'
import * as dotenv from 'dotenv';
const NODE_ENV = process.env.NODE_ENV
dotenv.config({ path: path.resolve(__dirname, `../.env.${NODE_ENV}`) })