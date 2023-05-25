import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "../../App";
import axios from "axios";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn({ navigate, driverId }) {
  const token = localStorage.getItem("token");

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const userId = loggedInUser._id;
  console.log(driverId, navigate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = {
      startLocation: data.get("text"),
      endLocation: data.get("text"),
    };

    const rideData = { ...newData, driverId, userId };
    console.log(rideData);

    // axios
    //   .post(
    //     `http://localhost:5000/api/v1/users/rides/select-ride}`,
    //     {
    //       rideData,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     const data = response.data;

    //     navigate("/rideStatus", { state: { data } });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });

    fetch('http://localhost:5000/api/v1/users/rides/select-ride',{
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rideData),
    }).then(response => response.json())
    .then(data =>  {
        if(data.message === 'Ride already exist') throw new Error('Ride already exist')
        else{
            navigate('/rideStatus',{state:{data}})
        }
    })
    .catch(error => alert(error.message))
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Where do you want to go?
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="From"
              name="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="text"
              label="Destination"
              type="text"
              id="text"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
