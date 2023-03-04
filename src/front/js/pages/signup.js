import React, { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signup = async (url) => {
    const request = {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    console.log(email + password);
    const response = await fetch(url, request);
    console.log(response);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signup(
      "https://3001-4geeksacade-reactflaskh-yz0nghamu8f.ws-eu89.gitpod.io/api/signup"
    );
  };

  return (
    <form
      className="mx-auto mt-5 text-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="my-2">
        <label>
          Email:&nbsp;
          <input
            type="text"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
        </label>
      </div>
      <div className="my-2">
        <label>
          Password:&nbsp;
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </label>
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};
