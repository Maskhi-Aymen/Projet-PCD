import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bg from '../images/background.jpg'
import ReactLoading from "react-loading";
import "../componant/styles/Signin.style.css";
import Typography from '@mui/material/Typography';


const theme = createTheme({
  status: {
    danger: '#F4ACB7',
  },
  palette: {
    primary: {
      main: '#fff',
      darker: '#053e85',
    },
    neutral: {
      main: '#F4ACB7',
      contrastText: '#D8E2DC',
    },
  },
});


export default function SignInSide() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [admin_mail, setadminmail] = useState("");
  const [admin_password, setPassword] = useState("");
  const PostData = () => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/login/${admin_mail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        admin_mail,
        admin_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          setLoading(false);
          if (admin_password !== "" && admin_mail !== "") {
            setError(true);
            setTimeout(() => setError(false), 2500);
          }
        }
        else {
          setTimeout(() => window.location.reload(), 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      admin_mail: data.get('email'),
      admin_password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={12}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[500] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        <Grid item xs={12} sm={12} md={9} component={Paper} elevation={9} square  sx={{float: 'right',opacity:'0.7',
        backgroundColor: 'primary.main',
      }}>
          <Box
          mr={4}

            sx={{
              my: 14,
              mx: 7,
            }}
          ><h1>Welcome Back !</h1>


            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ opacity:'3' }} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                variant="outlined"
                autoFocus 
                onChange={(e) => {setadminmail(e.target.value);console.log(admin_mail);} }
              />
              <br></br>
              <TextField
                margin="normal"
                required
               fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              /><br></br>

            <button
              onClick={() => PostData()}
              className="waves-effect505"
              type="submit"
              name="action"
              style={{
                opacity: "100% !important",border:"#FFCAD4",color:'white',
                backgroundColor: loading ? "#9d8189dc":"#9d8189dc"  ,
              }}
              disabled={loading}
            >
              {loading ? (
                <ReactLoading
                  height={"20px"}
                  width={"24px"}
                  className="loading1"
                  type="spin"
                />
              ) : (
                "LOGIN"
              )}
            </button><br/> 
            <Link href="#" variant="body2" sx={{color:'#9d8189dc'}} >
                    Forgot password?
                  </Link><br/>
            <button 
              className="waves-effect503"
              type="submit"
              name="actio3n"
              style={{
                opacity: "100% !important", 
                backgroundColor: loading ? "#ffff":"#ffff"  ,
              }}
            >Create an Account</button>
              <Grid container>
                <Grid           xs={false}
                 sm={9}
                 md={12}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid 
                 xs={false}
                 sm={9}
                 md={12}>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid></Grid>
      </Grid>
    </ThemeProvider>
  );
}
