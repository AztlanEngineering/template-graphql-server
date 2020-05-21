import rp from 'request-promise'
const base_url = 'https://api.vercel.com'
import qs from 'querystring'

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

const endpoints = {
  GET:{
    domains          :(params) => `/v5/domains${getQs(params)}`,
    domain           :({ name, ...params }) => `/v4/domains/${name}${getQs(params)}`,
    isDomainAvailable:(name) => `/v4/domains/status?name=${name}`,
    teams            :() => '/v1/teams'
  },
  POST  :{},
  DELETE:{
    domain:(param) => `/v4/domains/${param}`
  },
}


const getFromVercel = getEndpoint => async(params={}) => {
  const endpoint = getEndpoint(params)

  var options = {
    headers,
    method:'GET',
    uri   :base_url + endpoint,
    json  :true
  }
  //console.log(endpoint, params, options)

  return await rp(options)

}

const postToVercel = getEndpoint => async(params={}, body) => {
  const endpoint = getEndpoint(params)

  var options = {
    headers,
    body,
    method:'POST',
    uri   :base_url + endpoint,
    json  :true,
  }

  return await rp(options)
}

const deleteFromVercel =  getEndpoint => async(params={}) => {
  const endpoint = getEndpoint(params)

  var options = {
    headers,
    method:'DELETE',
    uri   :base_url + endpoint,
    json  :true,
  }

  return await rp(options)
}

const vercelConnectors = {
  GET   :getFromVercel,
  POST  :postToVercel,
  DELETE:deleteFromVercel
}

const VercelAPI = {

}

Object.keys(endpoints).forEach(e => {

  VercelAPI[e.toLowerCase()] = {}
  const m = VercelAPI[e.toLowerCase()]

  Object.keys(endpoints[e]).forEach(f => {
    m[f] = vercelConnectors[e](endpoints[e][f])
  })
})


export default VercelAPI
