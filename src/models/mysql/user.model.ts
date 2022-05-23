import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IUser } from '../../interface/IUser'

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  avatar: string

  @Column()
  phone: string

  @Column()
  customerId: number
}
