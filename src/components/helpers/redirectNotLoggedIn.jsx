import { Redirect } from "react-router"
import { isLoggedIn } from "../../helpers/decorators"

export const RedirectNotLoggedIn = () => {
  
  return (
    isLoggedIn() ?
      <></>
    :
      <Redirect to="/login"></Redirect>
  )
}