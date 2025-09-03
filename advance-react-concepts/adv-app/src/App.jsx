import "./App.css";
import Balance from "./components/Balance";
import Dashboard from "./components/pages/Dashboard";
import Homepage from "./components/Pages/Homepage";
import PageNotFound from "./components/pages/PageNotFound";
import Nav from "./components/pages/Nav";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Reducer from "./components/Reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      {/* <Reducer /> */}
      {/* <Balance /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
