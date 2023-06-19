import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/authAction";

const Login = () => {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    dispatch(loginUser(userData, navigate));
    setUserData({ email: "", password: "" });
    console.log(errors);
  };
  return (
    <div className="p-10 border w-1/4 m-auto mt-44">
      <div className="w-full m-auto">
        <div className="text-center text-3xl text-green-500">
          <p>Login</p>
        </div>
        <div className="w-full my-10">
          <TextField
            onChange={onChange}
            value={userData.email}
            required
            type="email"
            className="w-full"
            name="email"
            label="Email"
            variant="outlined"
          />
          <p className="text-red-500">{errors.email}</p>
        </div>
        <div className="w-full my-10">
          <TextField
            onChange={onChange}
            value={userData.password}
            required
            type="password"
            className="w-full"
            name="password"
            label="Password"
            variant="outlined"
          />
          <p className="text-red-500">{errors.password}</p>
        </div>
        <div className="text-center">
          <Button type="submit" variant="contained" onClick={onSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
