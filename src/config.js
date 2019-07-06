// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '85c65b7374e0ba4968fe4f09226d5e86';



// 019e8f375549e0bbd4a4191862ebc88f

// Images
// An image URL looks like this example:
// https://image.tmdb.org/t/p/w1400_and_h450_face/5DUqFLgkLsJxyqPCAcgTivZy2SX.jpg

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500'

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}