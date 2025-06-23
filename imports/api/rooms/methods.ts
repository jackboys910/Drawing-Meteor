import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Rooms, Grid10, Cell } from './rooms';

const emptyGrid = (): Grid10 => Array.from({ length: 10 }, () => Array<Cell>(10).fill(0));

Meteor.methods({
  async 'rooms.insert'(name: string) {
    check(name, String);
    if (!name.trim()) return;

    await Rooms.insertAsync({
      name: name.trim(),
      grid: emptyGrid(),
      createdAt: new Date(),
    });
  },

  async 'rooms.remove'(roomId: string) {
    check(roomId, String);
    await Rooms.removeAsync(roomId);
  },

  async 'rooms.toggleCell'(roomId: string, row: number, col: number) {
    check(roomId, String);
    check(row, Number);
    check(col, Number);

    const room = await Rooms.findOneAsync(roomId);
    if (!room) return;

    const newGrid = room.grid.map((r, ri) =>
      r.map((cell, ci) => (ri === row && ci === col ? ((cell ? 0 : 1) as Cell) : cell)),
    ) as Grid10;

    await Rooms.updateAsync(roomId, { $set: { grid: newGrid } });
  },
});
