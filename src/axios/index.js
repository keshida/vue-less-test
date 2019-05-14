import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = process.env.API_ROOT
axios.interceptors.request.use(
  config => {
    return config
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)
