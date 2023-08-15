import express from 'express';
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import multer from 'multer';

mongoose.connect('mongodb://localhost:27017/cars');
mongoose.createConnection('mongodb://localhost:27017/caremployment');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const storage: multer.StorageEngine = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});

const carsSchema = new Schema({
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

export const Cars = model('Cars', carsSchema);

const caremploymentSchema = new Schema({
  name: String,
  models: [String],
});

export const Caremployment = model('Caremployment', caremploymentSchema);

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
    const newCar = await Cars.create(req.body.caremployment);
    res.status(200).json(newCar);
    console.log('Success:', newCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/caremployment', async (req, res) => {
  try {
    const cars = await Caremployment.find();
    res.send(cars);
  } catch (error) {
    console.log(error);
  }
});

app.post('/caremployment', async (req, res) => {
  try {
    const newCar = await Caremployment.create(req.body);
    console.log('New Car Employment:', newCar);
    res.status(200).json(newCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
