const { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } = require('typeorm')

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20
    })
    name: string
    
    @Column({
        length: 120,
        nullable: true
    })
    description?: string

    @Column({
        default: 0
    })
    stock: number

    @Column({
        length: 120,
        nullable: true
    })
    value?: string

    @Column({
        default: true
    })
    active?: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}