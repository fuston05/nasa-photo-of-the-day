import axios from 'axios';
const apiKey= process.env.REACT_APP_API_KEY;

export const fetchImage= (date) => {
  return axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return err;
    })

}//end fetchImage