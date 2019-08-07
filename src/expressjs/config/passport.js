import { facebookStrategy } from './strategies/facebook';
import { localStrategy } from './strategies/local';
import { twitterStrategy } from './strategies/twitter';
import { googleStrategy } from './strategies/google';

export default function(passport){
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    passport.use('facebook', facebookStrategy());
    passport.use('twitter', twitterStrategy());
    passport.use('google', googleStrategy());
    passport.use('local', localStrategy());
}