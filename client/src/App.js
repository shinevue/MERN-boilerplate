import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import store from "./store";
import Login from "./pages/Login";
import setAuthToken from "./utils/setAuthToken";
import jwtDecode from "jwt-decode";
import { logoutUser, setCurrentUser } from "./actions/authAction";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import BabyName from "./pages/BabyName";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import "./App.css";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NoPage />} />
              <Route
                path="/babyname"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<BabyName />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
