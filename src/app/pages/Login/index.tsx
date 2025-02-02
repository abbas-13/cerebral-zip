"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://3.111.196.92:8020/api/v1/login",
        {
          username: loginForm.username,
          email: "some_email",
          password: loginForm.password,
          phone_number: "some phone number",
          input_code: 0,
        }
      );
      if (response.statusText === "OK") {
        router.push("/Dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    } finally {
      setLoginForm({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-6 items-center bg-white/30 backdrop-blur-lg rounded-[1.75rem] w-[30%] py-8">
        <h2 className="text-5xl">login</h2>
        <form
          className="flex flex-col gap-6 my-4 items-center w-full"
          onSubmit={handleLogin}
        >
          <input
            className="p-2 rounded-lg text-black w-7/12"
            type="text"
            name="username"
            placeholder="username"
            value={loginForm.username}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg text-black w-7/12"
            type="email"
            name="email"
            placeholder="email"
            value={loginForm.email}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg text-black w-7/12"
            type="password"
            name="password"
            placeholder="password"
            value={loginForm.password}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded-lg text-black w-7/12"
            type="tel"
            name="phoneNumber"
            placeholder="phone number"
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            value={loginForm.phoneNumber}
            onChange={handleChange}
          />
          <Button
            className="w-2/5"
            sx={{
              textTransform: "lowercase",
              color: "white",
              background: "linear-gradient(to right, #06b6d4, #3b82f6)",
              backdropFilter: "blur(16px)",
              borderRadius: "0.5rem",
              fontFamily: "var(--font-sans-serif)",
            }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
