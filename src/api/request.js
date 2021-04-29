import axios from 'axios'

const PHP_BASE_URL = 'http://10.179.65.14:7777'

function instance() {
  return axios.create({
    baseURL: PHP_BASE_URL,
    headers: {'Referer': "http://10.179.72.82:7776"},
    params: {
      nginx_cors: false
    },
  })
}

export const request = instance()
