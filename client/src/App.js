import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Team from "./components/team/Team";
import DetailsTeam from "./components/team/DetailsTeam";
import NewUser from "./components/user/NewUser";
import { useState } from "react";

function App() {
  const [search,setSearch] = useState("")
  return (
    <BrowserRouter>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teamDetailes/:id" element={<DetailsTeam />} />
        <Route path="/create" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
