import express from 'express';
import passport from 'passport';
import * as auth from '../../controllers/auth';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8081/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

const authRouter = express.Router();

authRouter.route('/').post(auth.auth);

authRouter.route('/facebook').get(passport.authenticate('facebook'));
authRouter.route('/facebook/callback').get(passport.authenticate('facebook', {
    successRedirect: 'www.google.com',
    failureRedirect: '/facebook'
}));

export default authRouter;