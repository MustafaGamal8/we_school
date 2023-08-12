const { default: mongoose } = require("mongoose");


const degreesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seatNumber: {
    type: String,
    required: true
  },
  degrees: [
    {
      subject: {
        type: String,
        required: true
      },
      finalDegree: {
        type: Number,
        required: true
      },
      studentDegree: {
        type: Number,
        required: true
      }
    }
  ]
});





const DegreesModel = mongoose.model("degrees",degreesSchema)


export default DegreesModel;