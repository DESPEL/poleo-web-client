import { withCredentials } from "./decorators"

export const status = {
  success: 'success',
  invalid: 'invalid',
  empty:  'empty',
}

export const isPasswordCorrect = (password) => {
  if (!password)
    return status.empty

  if (withCredentials().password !== password)
    return status.invalid
  return status.success
}

export const isNewPasswordValid = (password) => {
  if (!password)
    return status.empty
  return status.success
}

export const doStringsMatch = (lhs, rhs) => {
  if (lhs !== rhs)
    return status.invalid
  return status.success
}
