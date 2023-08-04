import express from "express";
import * as path from "path";
import * as url from "url";
import bodyParser from "body-parser";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

var app = express();

// to get router
import IndexRouter from "./routes/IndexRouter.js";
import AdminRouter from "./routes/AdminRouter.js";
import UserRouter from "./routes/UserRouter.js";

//configuration for static files : css , images , audio
app.use(express.static(path.join(__dirname, "public")));

//configuration to extract request body content
app.use(bodyParser()); //

//configuration for template engine
app.set("view engine", "ejs");
app.set("views", "./views");

//route level middleware to load specific route as per user
app.use("/admin", AdminRouter);
app.use("/user", UserRouter);
app.use("/", IndexRouter);

app.listen(3000);
console.log("server invoked at link http://localhost:3000");
