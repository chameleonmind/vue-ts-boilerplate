// eslint-disable
import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 20000
})
// Intercept before sending HTTP requests
axios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: any) => {
    /**
     * you can process config here
     */
    return response
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    return Promise.reject(error)
  }
)
// Intercept after received HTTP requests
axios.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: any) => {
    /**
     * you can process response and error here
     */
    return response
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    if (error?.response && error.response.data) {
      // const code = error.response.status
      // const msg = error.response.data.message
      console.error(`[Axios Error]`, error.response)
    } else {
      console.error(`[Axios Error]`, error)
    }
    return Promise.reject(error)
  }
)

export default axios
