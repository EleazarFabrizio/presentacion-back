import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Userss {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    Nombre: string;
  
    @Column()
    Apellido: string;

    @Column()
    Documento: string;

    @Column()
    Password: string;
  
    @Column({ default: true })
    Activo: boolean;
    }
