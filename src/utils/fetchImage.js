import axios from 'axios';
const apiKey = "DEMO_KEY"
const apiUrl = "https://science.nasa.gov/wp-json/wp/v2/apod-basic";

export const fetchImage = (date) => {
  return axios
    .get(`${apiUrl}?api_key=${apiKey}&date=${date}`)
    .then(res => {
      return res.data[0];
    })
    .catch(err => {
      console.log('fetchImage err: ', err);
      return err;
    })
}