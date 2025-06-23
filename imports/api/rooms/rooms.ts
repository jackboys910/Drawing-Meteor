import { Mongo } from 'meteor/mongo';

export type Cell = 0 | 1;
export type Grid10 = Cell[][];

export interface Room {
  _id?: string;
  name: string;
  grid: Grid10;
  createdAt: Date;
}

export const Rooms = new Mongo.Collection<Room>('rooms');
