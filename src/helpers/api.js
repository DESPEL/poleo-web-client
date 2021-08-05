import { apiURL } from '../config'
import {removeEmpty} from './'

export const apiCall = async (data) => {
  console.log(JSON.stringify(removeEmpty(data)))
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
    const result = await response.json()
    return result
  } catch {
    return response
  }
}