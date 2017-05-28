// @flow
import { query } from './db'

export const getAccessToken = async (bearerToken: string) => {
  let results
  try {
    results = await query(
      'SELECT access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id FROM oauth_tokens WHERE access_token = $1',
      [bearerToken]
    )
  } catch (e) {
    console.error('Couldn\'t get access tokens from DB')
    return null
  }

  const token = results.rows[0]

  return {
    accessToken: token.access_token,
    clientId: token.client_id,
    expires: token.expires,
    userId: token.userId
  }
}

/**
 * Get client.
 */

module.exports.getClient = function * (clientId, clientSecret) {
  return query('SELECT client_id, client_secret, redirect_uri FROM oauth_clients WHERE client_id = $1 AND client_secret = $2', [clientId, clientSecret])
    .then(function (result) {
      var oAuthClient = result.rows[0]

      if (!oAuthClient) {
        return
      }

      return {
        clientId: oAuthClient.client_id,
        clientSecret: oAuthClient.client_secret
      }
    })
}

/**
 * Get refresh token.
 */

export const getRefreshToken = async (bearerToken: string) => {
  let results
  try {
    results = await query('SELECT access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id FROM oauth_tokens WHERE refresh_token = $1', [bearerToken])
  } catch (e) {
    console.error('Could not get refresh token info from DB')
    return null
  }

  return results.rowCount ? results.rows[0] : false
}

/*
 * Get user.
 */

module.exports.getUser = function * (username, password) {
  return query('SELECT id FROM users WHERE username = $1 AND password = $2', [username, password])
    .then(function (result) {
      return result.rowCount ? result.rows[0] : false
    })
}

/**
 * Save token.
 */

module.exports.saveAccessToken = function * (token, client, user) {
  return query('INSERT INTO oauth_tokens(access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id) VALUES ($1, $2, $3, $4)', [
    token.accessToken,
    token.accessTokenExpiresOn,
    client.id,
    token.refreshToken,
    token.refreshTokenExpiresOn,
    user.id
  ]).then(function (result) {
    return result.rowCount ? result.rows[0] : false
  })
}
