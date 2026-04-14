import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserType = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    type: Number,
    required: [true, 'user id is required'],
  })
  id!: number;

  @Prop({
    type: String,
    required: [true, 'first name is required'],
  })
  firstName!: string;

  @Prop({
    type: String,
    required: [true, 'last name is required'],
  })
  lastName!: string;

  @Prop({
    type: Number,
    required: [true, 'age is required'],
  })
  age!: number;

  @Prop({
    type: String,
    required: [true, 'email is required'],
    unique: true,
  })
  email!: string;

  @Prop({
    type: String,
    required: [true, 'password is required'],
  })
  password!: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Course' }],
    default: [],
  })
  courses!: Types.ObjectId[];

  @Prop({
    type: String,
    default: '',
  })
  image?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
