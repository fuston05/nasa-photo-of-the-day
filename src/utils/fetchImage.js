import axios from 'axios';
const apiKey= process.env.REACT_APP_API_KEY;

export const fetchImage= () => {
  return axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => {
      console.log('res.data', res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return err;
    })

}//end fetchImage