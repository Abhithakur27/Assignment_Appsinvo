import axios from "axios";


async function makeRequest({url, method = 'GET', data}) {

      // const instance = axios.create({
      //   baseURL: 'http://3.131.5.153:4000/api/',
      //   url: url,
      //   method: method,
      //   timeout: 1000,
      //   headers: {'X-Custom-Header': 'foobar'}
      // });

      const baseURL = 'http://3.131.5.153:4000/api/';
     const instance = axios({
        method,
        url: `${baseURL}${url}`,
        data
      });

      return instance
  }

  export default makeRequest