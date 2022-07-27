import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { FileType } from 'src/enums';
import SharedUser from 'src/interfaces/shared-user';

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column({
        type: "enum",
        enum: FileType
    })
    filetype: FileType;

    @Column()
    uri: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column("json")
    shared_users: SharedUser[];

    @CreateDateColumn()
    @Column()
    created_at: Date;

    @UpdateDateColumn()
    @Column()
    updated_at: Date;
}