import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import config from "../config/config";

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("passport callback function fired");

      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
