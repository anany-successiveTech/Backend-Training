import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  carModel: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 30,
    unique:true
  },
  price: {
    type: Number,
    required: true,
    min: 5,
    max: 100000, 
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
