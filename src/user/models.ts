import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20
    })
    username: string
    
    @Column({
        length: 120
    })
    email: string

    @Column({
        length: 120
    })
    first_name: string

    @Column({
        length: 120
    })
    last_name: string

    @Column()
    active: boolean
    
    @Column()
    last_login: Date

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
}