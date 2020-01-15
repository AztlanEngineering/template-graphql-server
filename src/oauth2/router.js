import {
  User
} from 'auth/models'
import {
  Setter
} from './models'
import { GoogleManager } from './providers'
import rp from 'request-promise'

const callbacks = require('express').Router()

callbacks.get(
  '/:setter/callback',
  async (req, res) => {
    const { state, scope, code:authorizationCode } = req.query
    let redirectUri
    console.log('Got This back', req.query)
    !(scope && authorizationCode) ?
      res.status(400).send('Bad request') :
      void(0)

    if (req.params.setter === 'google'){
      const GoogleMgr = GoogleManager(
        {},
        {
          state,
          authorizationCode
        },
      )
      await GoogleMgr.init()

      // C. We get the userprofile
      await GoogleMgr.getProfile()
      const redirectUri = await GoogleMgr.useStrategy()

      console.log('The profile of the user', GoogleMgr.authData)
      console.log('CTX', GoogleMgr.context)
      console.log('Will now redirect to', redirectUri)

      res.redirect(redirectUri)
    }

  }


)
export default callbacks

