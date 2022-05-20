import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ type: 'varchar' })
    age: number
}
