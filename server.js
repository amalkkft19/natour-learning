const app = require("./app");
const dotenv = require("dotenv").config();

const config = require("./.env");

console.log("this isport",process.env.PORT);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`server is listnening to port ${PORT}`)
})