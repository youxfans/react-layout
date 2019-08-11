const urlPrefix = 'https://api.woyuanyi.511cwpt.com/api/v1/';

export default (api: string, method: string = 'get', data?: object) => {
  const fetchUrl = urlPrefix + api;
  return fetch(fetchUrl, {
    method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
}