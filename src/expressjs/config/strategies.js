import {fbStrategy} from './strategies/facebook';
export default function(passport){
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    passport.use('facebook', fbStrategy);
}