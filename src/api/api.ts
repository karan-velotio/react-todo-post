import axios from 'axios';

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: { 'Content-Type': 'application/json' }
});
