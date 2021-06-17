const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm')

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20
    })
    username: string
    
    @Column({
        length: 120,
        nullable: true
    })
    email: string

    @Column({
        length: 120
    })
    first_name: string

    @Column({
        length: 120,
        nullable: true
    })
    last_name?: string

    @Column({
        default: true
    })
    active: boolean
    
    @Column("date", {
        nullable: true
    })
    last_login: Date

    @Column("date", {default: new Date()})
    created_at: Date

    @Column("date", {default: new Date()})
    updated_at: Date
}