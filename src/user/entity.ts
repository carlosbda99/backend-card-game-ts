const {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Unique
} = require('typeorm')

@Entity()
@Unique(['username'])
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
    email?: string

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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}