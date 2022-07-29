// since this is a pretty simple api, I won't create an 'endpoints' file
// note that the 'api' export would be more dynamic in a bigger application

import axios from 'axios';

const api = axios.create({
  method: 'GET',
  baseURL: 'https://viacep.com.br/ws/'
});

export default (data: string) => api({
  method: 'GET',
  url: `${data}/json/`
});
