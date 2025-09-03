import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Link to="profile">Profile</Link>
      <Link to="settings">Setting</Link>
      <div>This is Dashboard</div>
      <Outlet />
    </>
  );
}
