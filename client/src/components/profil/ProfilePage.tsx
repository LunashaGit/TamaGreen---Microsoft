import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, Grid, ThemeProvider } from "@mui/material";

type mapUser = {
  pseudo: string;
  email: string;
  password: string;
  isAdmin: boolean;
  energy: number;
  _id: string;
  score: number;
};

const theme = createTheme();

const ProfilePage = () => {
  const userData: mapUser = useSelector((state: any) => state.userReducer);
  console.log(userData);

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col items-center bg-[#160F29] text-white rounded-xl mx-6 ">
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
                disabled
                id="outlined-disabled"
                label="Pseudo"
                fullWidth
                defaultValue={userData.pseudo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled
                id="outlined-disabled"
                label="email"
                fullWidth
                defaultValue={userData.email}
              />
            </Grid>
          </Grid>
        </Box>
        <p className="py-2">Your score: {userData.score}</p>
        <p className="py-2 pb-10">Your best score: {userData.score}</p>
      </div>
    </ThemeProvider>
  );
};

export default ProfilePage;
