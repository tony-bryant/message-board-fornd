import {request} from "./request";

export const getAllMessage = () => {
  return request.get( '/Message/getAllMessage')
}

export const addMessage = (message) => {
  console.log(request.defaults)
  return request.post('/Message/addMessage', message)
}

