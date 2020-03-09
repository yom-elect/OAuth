import express from "express";
const router = express.Router();
import passport from "passport";

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.send("logging out");
});
// auth with google
router.get("/google");

module.exports = router;
