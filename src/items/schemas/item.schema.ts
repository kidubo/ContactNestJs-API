import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  PhoneNumber: Number,
  email: String,
});
