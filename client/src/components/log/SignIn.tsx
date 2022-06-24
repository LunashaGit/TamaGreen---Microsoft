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
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import axios from "axios";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

type propsSignin = {
  signInOpen: boolean;
  setSignInOpen: Dispatch<SetStateAction<boolean>>;
};

const theme = createTheme();

const SignIn = ({ signInOpen, setSignInOpen }: propsSignin) => {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean | (null & boolean)>(true);

  localStorage.setItem("remember", JSON.stringify(remember));

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
    if (localStorage.getItem("remember") === null) {
      setRemember(false);
    }
  }, [email, remember]);

  if (remember === false) {
    localStorage.removeItem("email");
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (remember) {
      localStorage.setItem("email", email as string);
    }

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        err.response.data.errors.email
          ? setEmailError(true)
          : setEmailError(false);
        err.response.data.errors.password
          ? setPasswordError(true)
          : setPasswordError(false);
      });
  };

  return (
    <div className="bg-black/70 absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center">
      <div className="bg-white w-5/6 shadow-md relative">
        <button
          className="absolute bg-white rounded-full border border-black h-10 w-10 flex items-center justify-center top-0 right-0 -translate-y-1/2 translate-x-1/2 text-2xl"
          onClick={() => setSignInOpen(!signInOpen)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ThemeProvider theme={theme}>
          {emailError && (
            <Alert severity="error" className="text-center">
              Oups ! Your email doesn't exist !
            </Alert>
          )}

          {passwordError && (
            <Alert severity="error" className="text-center">
              Oups ! Wrong password !
            </Alert>
          )}
          <Grid container component="main" sx={{ height: "100%" }}>
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
                  my: 12,
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
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleLogin}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={remember}
                        color="primary"
                        onClick={() => setRemember(!remember)}
                        checked={remember}
                      />
                    }
                    label="Remember me"
                  />
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
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
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

export default SignIn;
