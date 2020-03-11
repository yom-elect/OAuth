import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import config from "../config/config";
import User from "../models/user";

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, cb) => {
      //check if user already exists in our db
      User.findOne({ googleId: profile.id }).then(userExist => {
        if (userExist) {
          // already have user
        } else {
          //create new user
          const newUser = new User({
            username: profile.displayName,
            googleId: profile.id
          });
          newUser.save().then(newUser => {
            console.log(newUser, "was created");
          });
        }
      });
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
