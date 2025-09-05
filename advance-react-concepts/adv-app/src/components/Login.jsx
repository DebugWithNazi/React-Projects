import React, { useContext, useState } from "react";
import { userContext } from "./context/UserContext";

export default function Login() {
  const [value, setValue] = useState("");
  const { user, setUser } = useContext(userContext);
  function handlesubmit(e) {
    e.preventDefault();
    setUser(value);
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
