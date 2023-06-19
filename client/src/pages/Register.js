import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../actions/authAction";

const Register = () => {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    dispatch(registerUser(userData, navigate));
    setUserData({ name: "", email: "", password: "", password2: "" });
  };
  return (
    <div className="p-10 border w-1/4 m-auto mt-44">
      <div className="w-full m-auto">
        <div className="text-center text-3xl text-green-500">
          <p>Register</p>
        </div>
        <div className="w-full my-10">
          <TextField
            onChange={onChange}
            value={userData.name}
            required
            type="text"
            className="w-full"
            name="name"
            label="name"
            variant="outlined"
          />
          <p className="text-red-500">{errors.name}</p>
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
        <div className="w-full my-10">
          <TextField
            onChange={onChange}
            value={userData.password2}
            required
            type="password"
            className="w-full"
            name="password2"
            label="Confirm"
            variant="outlined"
          />
          <p className="text-red-500">{errors.password2}</p>
        </div>
        <div className="text-center">
          <Button type="submit" variant="contained" onClick={onSubmit}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
