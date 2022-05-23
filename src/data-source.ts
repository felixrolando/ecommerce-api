import { DataSource } from 'typeorm'
import { User } from './models/mysql/user.model'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'ecommerceDB',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
})
