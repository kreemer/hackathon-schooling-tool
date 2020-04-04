import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  loginToken: string;
  
  @Column({ defaultValue: false })
  isTeacher: boolean;

  @Column({ defaultValue: true })
  isActive: boolean;
}
