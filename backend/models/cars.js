import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const CarsSchema = new Schema({
  img: String,
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  name: String,
  model: String,
  fuel: String,
  transmission: String,
  owner: String,
  displacement: String,
  price: Number,
  km: Number,
  year: Number,
  ps: Number,
});

export default mongoose.models.Cars || mongoose.model('Cars', CarsSchema);
