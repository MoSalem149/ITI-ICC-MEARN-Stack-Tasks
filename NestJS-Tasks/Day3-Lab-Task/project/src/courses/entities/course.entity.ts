import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CourseType = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({
    type: String,
    required: [true, 'course name is required'],
  })
  name!: string;

  @Prop({
    type: Number,
    required: [true, 'course grade is required'],
  })
  grade!: number;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'User' }],
    default: [],
  })
  students!: Types.ObjectId[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
