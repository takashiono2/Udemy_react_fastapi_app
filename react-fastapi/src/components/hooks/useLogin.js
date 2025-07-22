import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginUserContext } from '../providers/LoginUserProvider'

export const useLogin = () => {

  const { setLoginUser, setIsLogined } = useContext(LoginUserContext)
  const navigate = useNavigate()

  const login = (user) => {
    const endpoint = 'http://127.0.0.1:8000/users'
    const queries = { name: user.username, password: user.password }
    axios.get(endpoint, { params: queries })
      .then(response => {
        console.log("response.data" + JSON.stringify(response.data));
        console.log(response.data[0]);
        if (Object.keys(response.data).length > 0) {
          console.log("ログイン成功");
          setLoginUser(user.username)
          setIsLogined(true);
          navigate("/", { state: { username: "ABC" } })
        } else {
          console.log("ログイン失敗");
          navigate("/loginfailed")
        }
      })
      .catch((e) => {
        console.error("ログイン失敗", e);
        setLoginUser({ username: "", password: "" })
        navigate("/loginfailed")
      })
  }

  return { login };
};

export default useLogin;