//express-mongodb connectivity file for schema implementation

import mongoose from "mongoose";
const url="mongodb://localhost:27017/stackbatch45";
mongoose.connect(url);
console.log("Successfully connected to mongodb database....");