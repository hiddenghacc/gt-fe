import axios from "axios"

// eslint-disable-next-line no-undef
const apiUri = process.env.REACT_APP_API_URI

const api = axios.create({
  baseURL: apiUri
})

export default api
