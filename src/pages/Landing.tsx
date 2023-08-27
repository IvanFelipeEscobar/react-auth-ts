import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Landing() {
  return (
    <>
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Welcome
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        The purpose of this application is to practice authentication using Oauth2 and the google api. It&apos;s built with default MUI components with little
        customization.
      </Typography>
    </Container></>
  )
}
