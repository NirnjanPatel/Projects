import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/service", (req, res) => {
  res.render("service");
});

router.get("/register", (req, res) => {
  res.render("register", { output: "" });
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.render("register", { output: "form submitted" });
});

router.get("/login", (req, res) => {
  res.render("login");
});

export default router;
