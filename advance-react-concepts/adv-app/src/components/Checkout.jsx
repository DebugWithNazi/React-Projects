import { useContext } from "react";
import { userContext } from "./context/UserContext";

export default function Checkout() {
  const value = useContext(userContext);
  return (
    <div>
      <h1>Checkout as {value.user}</h1>
    </div>
  );
}
