import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    actions.login(email, password);
    navigate("/private");
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
      <button type="submit">Login</button>
    </form>
  );
};
