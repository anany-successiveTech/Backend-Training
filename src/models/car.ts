import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  carModel: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30,
  },
  price: {
    type: Number,
    required: true,
    min: 5,
    max: 10, 
  },
  owner: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30,
  },
});

const Car = mongoose.model("Car", CarSchema);
export default Car;
