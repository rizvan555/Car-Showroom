import { Schema, model } from 'mongoose';

const carsSchema = new Schema({
  img: String,
  name: String,
  model: String,
  price: Number,
});

export const Cars = model('Cars', carsSchema);
