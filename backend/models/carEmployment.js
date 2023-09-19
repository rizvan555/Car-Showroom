import mongoose, { Schema } from 'mongoose';

const carEmploymentSchema = new Schema({
  name: String,
  models: [String],
});
export default mongoose.models.CarEmployment ||
  mongoose.model('CarEmployment', carEmploymentSchema);
