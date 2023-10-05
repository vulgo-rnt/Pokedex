import mongoose from "mongoose";

const { Schema } = mongoose;

const pokemon = new Schema({
  id: Number,
  name: String,
  weight: Number,
  height: Number,
  stats: Object,
  types: Array,
  img: Array,
  region: String,
  evolutions: Array,
});

const Model = mongoose.model("pokemon", pokemon);

export default Model;
