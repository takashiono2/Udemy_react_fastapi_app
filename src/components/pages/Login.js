import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';

const Login = () => {
  const { login } = useLogin();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const onClickLogin = () => {
    login(user);
  }


  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">
            ログイン画面
          </Typography>


          <TextField
            required
            label="名前"
            margin='normal'
            name="username"
            id="password"
            autoComplete='current-password'
            fullWidth
            onChange={handleChange}
          />
          <TextField
            required
            label="パスワード"
            margin='normal'
            name="password"
            type='password'
            id="password"
            autoComplete='current-password'
            fullWidth
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onClickLogin}
          >ログイン</Button>
          <Link to="register">新規登録はこちら</Link>

        </Box>
      </Container>
    </>
  )
}

export default Login