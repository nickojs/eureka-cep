// since this is a pretty simple api, I won't create an 'endpoints' file
// note that the 'api' export would be more dynamic in a bigger application

import axios from 'axios';

// I'd obviously hide this apikey on the server side
export const geoAPIKey = 'ae0b16e9aeaf4d5ca08383c8d4c667cd';

const cepAPI = axios.create({
  method: 'GET',
  baseURL: 'https://viacep.com.br/ws/'
});

const geoAPI = axios.create({
  method: 'GET',
  baseURL: 'https://api.geoapify.com/v1/geocode/'
});

export const staticMapURI = (lonLat: string) => axios.getUri({
  method: 'GET',
  baseURL: 'https://maps.geoapify.com/v1/staticmap',
  params: {
    apiKey: geoAPIKey,
    style: 'osm-bright',
    width: '400',
    height: '400',
    format: 'jpeg',
    zoom: '15',
    center: lonLat.replace(/"/gi, ''),
    marker: `${lonLat.replace(/"/gi, '')};color:#ff0000;size:medium`
  }
});

export const getCepAPi = (data: string) => cepAPI({ url: `${data}/json/` });

export const getLonLat = (data: string) => geoAPI({
  url: data,
  params: {
    apiKey: geoAPIKey
  }
});
