import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react'
import BasicMenu from '../elements/BasicMenu';
import { LoginUserContext } from '../providers/LoginUserProvider';

const Header = () => {
  const { loginUser } = useContext(LoginUserContext);
  return (

    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={6}>
            <BasicMenu />
          </Grid>
          <Grid item xs={6} sx={{ py: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ログインユーザー：{loginUser}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >
  );
}

export default Header