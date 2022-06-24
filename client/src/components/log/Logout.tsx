import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key: string) => {
    if (typeof window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };
  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        removeCookie("jwt");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "/";
  };
  return (
    <li className="px-3 py-1.5 hover:shadow-md" onClick={logout}>
      Logout
    </li>
  );
};

export default Logout;
