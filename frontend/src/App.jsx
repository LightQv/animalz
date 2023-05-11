import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FetchContextProvider } from "./contexts/FetchContext";
import Home from "./pages/Home";
import ProfilesCard from "./pages/ProfilesCard";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <FetchContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles-list" element={<ProfilesCard />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
    </FetchContextProvider>
  );
}

export default App;
