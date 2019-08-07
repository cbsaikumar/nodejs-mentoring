import express from 'express';
import passport from 'passport';
import * as auth from '../../controllers/auth';

const authRouter = express.Router();

authRouter.route('/').post(auth.auth);

authRouter.route('/local').get(passport.authenticate('local', { failureRedirect: '/api/auth/local' }),
  function(req, res) {
    res.redirect('www.google.com');
  });

authRouter.route('/facebook').get(passport.authenticate('facebook'));
authRouter.route('/facebook/callback').get(auth.authByPassport('facebook'));

authRouter.route('/twitter').get(passport.authenticate('twitter'));
authRouter.route('/twitter/callback').get(auth.authByPassport('twitter'));

authRouter.route('/google').get(passport.authenticate('google', { scope: ['profile'] }));
authRouter.route('/google/callback').get(auth.authByPassport('google'));

export default authRouter;