import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";

type mapUser = {
  pseudo: string;
  email: string;
  password: string;
  isAdmin: boolean;
  energy: number;
  _id: string;
  score: number;
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#246A73',
    },
    secondary: {
      main: '#fff',
    },
  }
});

const ProfilePage = () => {
  const userData: mapUser = useSelector((state: any) => state.userReducer);
  console.log(userData);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="border-2 rounded-lg border-[#246A73] shadow-md m-3 flex justify-center p-3 h-[667px]">
      <div className="flex flex-col items-center bg-[#160F29] text-white rounded-xl">
        <h2 className="py-6 text-xl font-bold">Profil</h2>
        {userData && (
          <Avatar sx={{ mb: 1 }}>{userData.pseudo.slice(0, 1)}</Avatar>
        )}

        <Box
          component="form"
          sx={{
            my: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={1} sx={{ px: 5 }}>
            <Grid item xs={12} sx={{ pb: 1 }}>
              <TextField
                id="filled-basic"
                label="Pseudo"
                fullWidth
                variant="filled"
                color="primary"
                sx={{background:'#fff'}}
                defaultValue={userData.pseudo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="filled"
                id="filled-basic"
                label="email"
                fullWidth
                color="primary"
                sx={{background:'#fff'}}
                defaultValue={userData.email}
              />
            </Grid>
          </Grid>
        </Box>
        <p className="py-2">Your score: {userData.score}</p>
        <p className="py-2 pb-10">Your best score: {userData.score}</p>
      </div>
      </div>
    </ThemeProvider>
  );
};

export default ProfilePage;
