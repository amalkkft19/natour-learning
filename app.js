const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");
const morgan = require("morgan");

const express = require("express");

const app = express();
app.use(express.json());
app.use(morgan("dev"));



app.use("/api/v1/users",userRouter);
app.use("/api/v1/tours",tourRouter);

module.exports=app;