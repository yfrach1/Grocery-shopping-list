import AuthBackground from "./shared/styledComponent/Background";
import "./App.css";
import Auth from "./user/pages/Auth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Background from "./shared/styledComponent/Background";

function App() {
  //at start the auth page will be show down,
  //after login or signup the user pager will show down this time
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  var routes;

  if (isAuth) {
  } else {
    routes = (
      <Routes>
        <Route path="/signUp" element={<Auth isLogInMode={false} />} exact />
        <Route path="/signIn" element={<Auth isLogInMode={true} />} exact />
        <Route path="/*" element={<Navigate to="/signIn" replace />} />
      </Routes>
    );
  }
  return <div className="App">{routes}</div>;
}

export default App;
