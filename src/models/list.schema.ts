import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type ListDocument = List & Document;

@Schema()
export class List {
  @Prop({ required: true })
  userId: ObjectId;

  @Prop({
    type: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        tags: [{ type: String }],
        createdAt: { type: Date },
        updatedAt: { type: Date },
      },
    ],
    required: true,
  })
  items: Array<{
    title: string;
    description: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
  }>;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const ListSchema = SchemaFactory.createForClass(List);
