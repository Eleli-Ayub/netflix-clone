import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import React, { useState } from "react";

const login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [authState, setAuthState] = useState<string>("register");
  return (
    <main className="h-screen bg-[url('../public/assets/images/Netflix.jpg')] bg-full bg-center bg-no-repeat bg-cover flex items-center justify-center">
      <div className="py-10 px-10 rounded-2xl bg-black/80 flex items-center justify-center flex-col">
        <h1 className="text-red-700 mb-10 font-bold text-4xl">
          {authState === "login" ? "Login" : "Sign Up"}
        </h1>
        <Input
          id="username"
          onChange={(e: any) => {
            setUsername(e.target.value);
          }}
          value={username}
          label="Username"
          type="text"
        />

        <Input
          id="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          value={password}
          label="Password"
          type="password"
        />
        {authState === "register" ? (
          <>
            <Input
              id="Confirmed Password"
              onChange={(e: any) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              label="Confirmed Password"
              type="password"
            />{" "}
            <Input
              id="email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              value={confirmPassword}
              label="Email"
              type="email"
            />
          </>
        ) : (
          ""
        )}
        <Button
          label={authState === "login" ? "Login" : "Sign Up"}
          onClick={() => {}}
          color="#fff"
        />

        <button
          onClick={() => {
            setAuthState(authState === "login" ? "register" : "login");
          }}
          className="text-white text-sm pt-3  flex"
        >
          <p className="underline">
            {authState === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <p className="text-blue-400 ml-2">
            {authState === "login" ? "Create Account" : "Login"}
          </p>
        </button>
      </div>
    </main>
  );
};

export default login;
