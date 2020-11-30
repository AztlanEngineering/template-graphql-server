import rp from 'request-promise'

export default async (ipAddress) => {
  const ipDetails = await rp({
    method:'GET',
    json  :true,
    uri   :`http://api.ipstack.com/${ipAddress}?access_key=${process.env.UTILS_IPSTACK_ACCESS_KEY}`
  })
  return ipDetails
}
