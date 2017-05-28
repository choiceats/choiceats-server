import { Strategy } from 'passport-http-bearer'
import { User } from '../db/user';

const passportConfig = (passport) => {
  passport.use(new Strategy(
    (token, cb) => {

    }
  ))
}
