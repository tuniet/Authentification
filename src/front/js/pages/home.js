import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Go to Signup</h1>
      <Link to="/signup">
        <button className="btn btn-succes">Click here!</button>
      </Link>
      <h1>Go to Login</h1>
      <Link to="/login">
        <button className="btn btn-succes">Click here!</button>
      </Link>
    </div>
  );
};
