import mongoose from "mongoose";

const ablumSchema = new mongoose.Schema({
    name:     {type: String, required: true},
    desc:     {type: String, required: true},
    bgColor:   {type: String, required: true},
    image:    {type: String, required: true}
   
})

const ablumModel = mongoose.models.album || mongoose.model("album",ablumSchema);

export default ablumModel;