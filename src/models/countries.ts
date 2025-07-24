import mongoose, { mongo } from "mongoose";

const ContriesSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
});

const Country = mongoose.model("Country", ContriesSchema);
export default Country;
  