import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserContext } from "../../App";
// import {handleSignInUser, handleGetUserInfo} from "../../Authentication/Firebase/GoogleAtuh/GoogleAuth"
import { ToastContainer } from "react-toastify";
import loginService from '../../../utils/loginService'
import Swal from 'sweetalert2'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

//------------Main Function--------------------
export default function SignIn() {
  // --------------------Navigation start-----------------
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state || '/'
  // // --------------------Navigation end-----------------

    // -------------User State information--------------------

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //   // -------------User State information end----------------

  //   ----------------------Sign In with Email & Password With react hook--------------------------
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const { email, password } = data;
   const res = await loginService(data)

    if(res.request.status === 400){
      Swal.fire(
        'Ops!',
        `${res.response.data.message}`,
        'error'
      )
    }else{
      Swal.fire(
        'Success!',
        `${res.data.message}`,
        'success'
      )

      localStorage.setItem('token',res.data.token)
      navigate(from, { replace: true })
    }
  };

  //   ----------------------Sign In with Email & Password with react hook end--------------------------

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <ToastContainer position="top-left" />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RouterLink to="/">
            {" "}
            <Avatar
              alt="Ewu Event Management"
              sx={{ width: 100, height: 100 }}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            />
          </RouterLink>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              // required
              fullWidth
              // id="email"
              label="Email Address"
              // name="email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />

            {errors.email && errors.email.type === "required" && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span style={{ color: "red" }}>Email is invalid</span>
            )}
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span style={{ color: "red" }}>Password is required</span>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <RouterLink to="/forgotPass" variant="body2"style={{color: '#1976D2',  textDecoration: 'underline'}} >
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink variant="body2" to="/signUp" style={{color: '#1976D2',  textDecoration: 'underline'}}>
                  
                  Don't have an account? Sign Up
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
