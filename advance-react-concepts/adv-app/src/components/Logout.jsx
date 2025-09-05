import React, { useContext } from "react";
import { userContext } from "./context/UserContext";
export default function Logout() {
  const { setUser } = useContext(userContext);
  return (
    <div>
      <button onClick={() => setUser("Guest")}>Logout</button>
    </div>
  );
}
