import rp from 'request-promise'
import qs from 'querystring'

const apiEndpoints = {
  GET:{
    profile:() => 'https://www.googleapis.com/oauth2/v3/userinfo'
  },
}

class GoogleAPI {
  constructor(accessToken) {
    this.accessToken = accessToken
    this.headers = { Authorization: `Bearer ${this.accessToken}` }
  }

  async getProfile() {
    const options = {
      method :'GET',
      uri    :apiEndpoints.GET.profile(),
      headers:this.headers,
      json   :true,
    }
    return await rp(options)

    /*
    {
      sub: '113530791892162584951',
      name: 'Adrian Villa',
      given_name: 'Adrian',
      family_name: 'Villa',
      profile: 'https://plus.google.com/113530791892162584951',
      picture: 'https://lh3.googleusercontent.com/a-/AOh14GhpMRP1nBMj5_Ul4x7hpZTtdi0xUqWjwQhZECKYXw',
      email: 'adrian.villa@779.mx',
      email_verified: true,
      locale: 'fr',
      hd: '779.mx'
    }*/
  }
}

export default GoogleAPI
