import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginUserContext } from '../providers/LoginUserProvider'

export const useLogin = () => {

  const { setLoginUser, setIsLogined } = useContext(LoginUserContext)
  const navigate = useNavigate()

  const login = (user) => {
    const endpoint = 'https://jsonplaceholder.typicode.com/users'
    const queries = { username: user.username, id: user.password }
    axios.get(endpoint, { params: queries })
      .then(response => {
        if (response.data[0] === undefined) {
          navigate("/loginfailed")
        } else {
          setLoginUser(response.data[0].username)
          setIsLogined(true);
          navigate("/", { state: { username: "ABC" } })
        }
      })
  }
  return (
    <div>{login}</div>
  )
}

export default useLogin