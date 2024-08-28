const mongoose = require("mongoose");

const imageDetailsScehma = new mongoose.Schema(
    {
        image:String

    },
    {
        collection:"ImageDetails"
    }
);

mongoose.model("ImageDetails", imageDetailsScehma);