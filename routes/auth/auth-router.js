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
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("you reached the call back url");
});

module.exports = router;
