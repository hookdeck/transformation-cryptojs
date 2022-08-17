var crypto = require("crypto-js")

function getSignatureKey(key, dateStamp, regionName, serviceName) {
  var kDate = crypto.HmacSHA256(dateStamp, "AWS4" + key)
  var kRegion = crypto.HmacSHA256(regionName, kDate)
  var kService = crypto.HmacSHA256(serviceName, kRegion)
  var kSigning = crypto.HmacSHA256("aws4_request", kService)
  return kSigning
}

addHandler("transform", (request, context) => {
  const sig = getSignatureKey("KEYEXAMPLE", "20150830", "us-east-1", "iam")

  console.log(sig.toString(crypto.enc.Base64))
  // Transform the request object then return it.
  return request
})
