import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);

  if (store.token == "" || store.token == null) {
    return (
      <div>
        <h1>You have to login t acces your private area</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>This is your private page</h1>
      </div>
    );
  }
};
