import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetails";
import UserCardsList from "./pages/UserCardsList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles-list" element={<UserCardsList />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
}

export default App;
