import mongoose from "mongoose"


const registropassoschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
}, { versionKey: false })


const registropassos = mongoose.model("registropassos", registropassoschema)

export default registropassos

