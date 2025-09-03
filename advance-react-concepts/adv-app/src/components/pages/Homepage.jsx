import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Homepage() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  function handleClick() {
    navigate("/Dashboard/profile", { state: { username } });
  }

  return (
    <>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <div>This is Home Page</div>
      <button onClick={handleClick}>Go to profile page</button>
    </>
  );
}
