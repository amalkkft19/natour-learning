const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const config = require("./.env");
const db = process.env.DATABASE;

mongoose
.connect(db, {
    useCreateIndex: true,
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then((docs) => {
    console.log(`========= DB Connected ========`);
})
.catch((err) => {
    console.log(`err`, err);
});

const tourSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true , "A tour name is required"],
        unique: true,
    },
    description: String,
    price: Number,
    rating:{
        type: Number,
        required: [true, "A raating should be added"]
    }

});

const Tour = mongoose.model("Tour", tourSchema);

const testTour = new Tour({
    name: "Eccentrincs Tour",
    description: "2015-19 ec rit batch all india tour",
    price:13000,
    rating:4.5,
})

testTour.save().then((doc)=>{
    console.log(doc);
}).catch((err)=>{
    console.log(err);
})


console.log("this isport",process.env.PORT);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`server is listnening to port ${PORT}`)
})