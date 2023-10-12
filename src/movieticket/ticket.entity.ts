import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity('ticketbook') // Specify the table name (optional)
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    movie: number;
  
    @Column({ type: 'text' })
    userID: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
