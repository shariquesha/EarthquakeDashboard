import 'whatwg-fetch'

export async function Get(params) {
 return await fetch('http://localhost:3000/api/earthquakes'+params)
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    return data;
  }).catch(function(error) {
    console.log('request failed', error)
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
