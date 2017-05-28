import { Strategy } from 'passport-http-bearer'
import * as user from '../db/user'

export const passportConfig = (passport) => {
  passport.use(new Strategy(
    (token, cb) => {
      user.findByToken(token, (err, user) => {
        if (err) { return cb(err) }
        if (!user) { return cb(null, false) }
        return cb(null, user)
      })
    }
  ))
}
