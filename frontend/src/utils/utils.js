import axios from 'axios'
export const axiosClient = axios.create({
   // baseURL:'http://localhost:1234/api/v1'
   baseURL:'https://open-job-listing-application.onrender.com/api/v1'
})