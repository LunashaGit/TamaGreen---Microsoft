import { useEffect, useState } from "react";
import Achievement from "./components/achievement";
import Avatar from "./components/avatar";
import Dashboard from "./components/dashboard";
import Navigation from "./components/navigation";
import Profil from "./components/profil";
import Questions from "./components/questions";
import Ranking from "./components/ranking";

import axios from "axios";
import { useDispatch } from "react-redux";
import { UidContext } from "./components/AppContext";
import { getUser } from "./redux/actions/user.actions";
import SignIn from "./components/log/SignIn";
import SignUp from "./components/log/SignUp";

const App = () => {
  const [page, setPage] = useState<string>("home");
  const [uid, setUid] = useState(null);
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => {
          console.log("No token");
        });
    };
    fetchToken();
    if (uid) {
      dispatch<any>(getUser(uid));
    }
  }, [dispatch, uid]);
  return (
    <UidContext.Provider value={uid}>
      {uid ? (
        <div className="h-screen">
          <Navigation page={page} setPage={setPage} />
          <main className="h-[calc(100%-4rem)] pb-1 relative">
            {page === "home" && (
              <>
                <Dashboard />
                <section className="ml-6 px-6 h-full grid gap-4 grid-rows-6">
                  <Questions />
                  <Avatar />
                </section>
              </>
            )}
            {page === "profil" && <Profil />}
            {page === "achievement" && <Achievement />}
            {page === "ranking" && <Ranking />}
          </main>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center flex-col gap-4">
          <button
            className="border border-black w-40 py-2"
            onClick={() => setSignInOpen(!signInOpen)}
          >
            Sign in
          </button>
          <button
            className="border border-black w-40 py-2"
            onClick={() => setSignUpOpen(!signUpOpen)}
          >
            Sign up
          </button>
          {signInOpen && (
            <SignIn signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
          )}
          {signUpOpen && (
            <SignUp
              signUpOpen={signUpOpen}
              setSignUpOpen={setSignUpOpen}
              signInOpen={signInOpen}
              setSignInOpen={setSignInOpen}
            />
          )}
        </div>
      )}
    </UidContext.Provider>
  );
};

export default App;
