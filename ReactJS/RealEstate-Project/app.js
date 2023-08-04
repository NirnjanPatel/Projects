// app level configuration file
import express from "express";
import url from "url";
import path from "path";
import bodyParser from 'body-parser';
import session from "express-session";
import randomstring from "randomstring";
import cookie from 'cookie-parser';
import fileupload from "express-fileupload";

// configuration of __directory
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const key = randomstring.generate();
var app = express();

// configuration of template engine and template pages
app.set("view engine", "ejs");
app.set("views", "./Views");

// configuration of static files : css, images, audio etc.
app.use(express.static(path.join(__dirname, "Public")));

// configuration to enable session
app.use(session({ "secret": key }));

// configuration to extract request body content
app.use(bodyParser());

// configuration to enable cookie
app.use(cookie());

// configuration to enable file-upload
app.use(fileupload());

// importing routes as per user
import indexRouter from "./Routes/indexRouter.js";
import adminRouter from "./Routes/adminRouter.js";
import userRouter from "./Routes/userRouter.js";

// route level middleware  to load specific route as per user 
app.use("/", indexRouter); // configure routes at the end of all configurations
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3001);
console.log("https://localhost:3001");