const urlPrefix = 'https://api.woyuanyi.511cwpt.com/api/v1/';

export default ({ api, method = 'get', header, body }: { api: string, method?: string, header?: object, body?: object }) => {
  const fetchUrl = urlPrefix + api;
  let totalCount: string | null;
  return fetch(fetchUrl, {
    method,
    headers: {
      'content-type': 'application/json',
      ...header
    },
    body: JSON.stringify(body)
  })
  .then(response => {
    totalCount = response.headers.get('Total-Count');
    return response.json();
  })
  .then(data => {
    if (totalCount === null) return data;
    return { data, totalCount };
  })
}