import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'; // navigateを使っているのでインポートがあるはず
import useRegister from '../hooks/useRegister';

const Register = () => {
  const { handleRegister, user, handleChange } = useRegister()

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
            新規登録
          </Typography>

          <form onSubmit={handleRegister}>
            <TextField
              required
              label="名前"
              margin='normal'
              name="username"
              value={user.username}
              id="username"
              // autoComplete='current-password'
              // これはパスワード用なので 'username' などが適切ですが、ここでは必須ではないので、適宜調整してください。
              fullWidth
              onChange={handleChange}
            />
            <TextField
              required
              label="パスワード"
              margin='normal'
              name="password"
              value={user.password}
              type='password'
              id="password"
              autoComplete='new-password' // 新規登録なので 'new-password' がより適切
              fullWidth
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="error"
            >
              登録
            </Button>
            <Link to="/login">登録済みの方はこちら</Link>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Register