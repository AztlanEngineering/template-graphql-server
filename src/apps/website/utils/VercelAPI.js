import rp from 'request-promise'
import qs from 'querystring'

const base_url = 'https://api.vercel.com'

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0
}

const getQs = (params) => {
  const hasParams = !isEmpty(params)
  return hasParams ? '?' + qs.stringify(params) : ''
}

const headers = {
  Authorization:`Bearer ${process.env.VERCEL_SECRET_TOKEN}`
}

const apiEndpoints = {
  GET:{
    domains          :(params) => `/v5/domains${getQs(params)}`,
    domain           :({ name, ...params }) => `/v4/domains/${name}${getQs(params)}`,
    isDomainAvailable:(name) => `/v4/domains/status?name=${name}`,
    teams            :() => '/v1/teams'
  },
  POST:{
    verifyDomain:({ name, ...params }) => `/v4/domains/${name}/verify${getQs(params)}`,
    addDomain   :( params ) => `/v4/domains${getQs(params)}`
  },
  DELETE:{
    domain:({name, ...params}) => `/v4/domains/${name}${getQs(params)}`
  },
}

const apiMethods = {
  GET:getEndpoint => async(params={}) => {
    const endpoint = getEndpoint(params)

    var options = {
      headers,
      method:'GET',
      uri   :base_url + endpoint,
      json  :true
    }
    //console.log(endpoint, params, options)

    return await rp(options)

  },

  POST:getEndpoint => async(params={}, body) => {
    const endpoint = getEndpoint(params)

    var options = {
      headers,
      body,
      method:'POST',
      uri   :base_url + endpoint,
      json  :true,
    }

    return await rp(options)
  },

  DELETE:getEndpoint => async(params={}) => {
    const endpoint = getEndpoint(params)

    var options = {
      headers,
      method:'DELETE',
      uri   :base_url + endpoint,
      json  :true,
    }

    return await rp(options)

  }
}

const VercelAPI = {}

Object.keys(apiEndpoints).forEach(e => {

  VercelAPI[e.toLowerCase()] = {}
  const m = VercelAPI[e.toLowerCase()]

  Object.keys(apiEndpoints[e]).forEach(f => {
    m[f] = apiMethods[e](apiEndpoints[e][f])
  })
})


export default VercelAPI
