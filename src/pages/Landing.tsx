import { useAuth0 } from '@auth0/auth0-react';
import {  Container, Typography } from '@mui/material'
import LoginButton from '../components/LoginButton';
import ProfileCard from '../components/ProfileCard';

export default function Landing() {

  const { user, isAuthenticated } = useAuth0();
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
    </Container>
    { isAuthenticated && user

    ? <Container maxWidth="md">
     <ProfileCard user={user}/>
      </Container>
      :
      <LoginButton/>
}
      </>
  )
}
