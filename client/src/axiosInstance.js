import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  headers: {
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log('data will be sent', config);
      // show loader
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      // hide loader
      console.log('data recieved', response)
      // response.data.push("test")
      return response;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
  