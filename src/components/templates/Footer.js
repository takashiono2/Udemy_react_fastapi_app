import { Typography } from '@mui/material'
import React from 'react'


const Copyright = (props) => {
  return (
    <Typography
      variant='body2'
      color="text.secondary"
      align='center'
      {...props}
    >
      {'Copyright © '}
      ABCD corp.
      {new Date().getFullYear()}{'.'}
    </Typography>
  )
}

const Footer = () => {
  return (
    <div><Copyright sx={{
      mt: 8, mb: 4
    }} /></div>
  )
}

export default Footer