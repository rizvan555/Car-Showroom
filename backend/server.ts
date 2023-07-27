import express from 'express';
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import cors from 'cors';

mongoose.connect('mongodb://localhost:27017/cars');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/cars', async (req, res) => {
  try {
    const cars = await Cars.find();
    res.send(cars);
  } catch (error) {
    console.log(error);
  }
});

app.post('/cars', async (req, res) => {
  try {
    const newCar = await Cars.create(req.body);
    res.status(200).json(newCar);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const carsSchema = new Schema({
  img: String,
  name: String,
  model: String,
  price: Number,
});

export const Cars = model('Cars', carsSchema);
