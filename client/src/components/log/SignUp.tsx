import {
  Alert,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

type propsSignup = {
  signUpOpen: boolean;
  setSignUpOpen: Dispatch<SetStateAction<boolean>>;
  signInOpen: boolean;
  setSignInOpen: Dispatch<SetStateAction<boolean>>;
};

const theme = createTheme();

const SignUp = ({
  signUpOpen,
  setSignUpOpen,
  signInOpen,
  setSignInOpen,
}: propsSignup) => {
  const [pseudo, setPseudo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [controlPassword, setControlPassword] = useState<string>("");
  const [pseudoError, setPseudoError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [controlError, setControlError] = useState<boolean>(false);
  const [termError, setTermError] = useState<boolean>(false);

  const handleRegister = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const terms = document.getElementById("terms") as HTMLInputElement;

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword) {
        setControlError(true);
      }
      if (!terms.checked) {
        setTermError(true);
      }
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          setSignUpOpen(!signUpOpen);
          setSignInOpen(!signInOpen);
        })
        .catch((err) => {
          err.response.data.errors.pseudo
            ? setPseudoError(true)
            : setPseudoError(false);
          err.response.data.errors.email
            ? setEmailError(true)
            : setEmailError(false);
          err.response.data.errors.password
            ? setPasswordError(true)
            : setPasswordError(false);
        });
    }
  };

  return (
    <div className="bg-black/70 absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center">
      <div className="bg-white w-5/6 shadow-md relative">
        <button
          className="absolute bg-white rounded-full border border-black h-10 w-10 flex items-center justify-center top-0 right-0 -translate-y-1/2 translate-x-1/2 text-2xl"
          onClick={() => setSignUpOpen(!signUpOpen)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ThemeProvider theme={theme}>
          {pseudoError && (
            <Alert severity="error" className="text-center">
              Oups ! Your pseudo exist already !
            </Alert>
          )}

          {passwordError && (
            <Alert severity="error" className="text-center">
              Oups ! Wrong password !
            </Alert>
          )}
          {controlError && (
            <Alert severity="error" className="text-center">
              Oups ! Yours password aren't the same !
            </Alert>
          )}
          {emailError && (
            <Alert severity="error" className="text-center">
              Oups ! Your email exist already !
            </Alert>
          )}
          {termError && (
            <Alert severity="error" className="text-center">
              Please, accept the terms !
            </Alert>
          )}
          <Grid container component="main">
            <CssBaseline />

            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 2,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <FontAwesomeIcon icon={faUser} />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleRegister}
                  sx={{ mt: 1 }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="pseudo"
                        label="Pseudo"
                        name="pseudo"
                        autoComplete="pseudo"
                        autoFocus
                        onChange={(e) => setPseudo(e.target.value)}
                        value={pseudo}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                        value={password}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="passwordControl"
                        label="Password Control"
                        type="password"
                        id="passwordControl"
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="remember"
                            color="primary"
                            id="terms"
                          />
                        }
                        label="Accept the GCD"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link href="/signin" variant="body2">
                        {"Already have an account? Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(https://source.unsplash.com/random)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SignUp;
