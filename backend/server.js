import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import Cars from './models/cars.js';
import CarEmployment from './models/carEmployment.js';

mongoose.connect('mongodb://localhost:27017/cars');
mongoose.createConnection('mongodb://localhost:27017/carEmployment');

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

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});

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
    console.log('Success:', newCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/carEmployment', async (req, res) => {
  try {
    const cars = await CarEmployment.find();
    res.send(cars);
  } catch (error) {
    console.log(error);
  }
});

app.post('/carEmployment', async (req, res) => {
  try {
    const newCar = await CarEmployment.create(req.body);
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
