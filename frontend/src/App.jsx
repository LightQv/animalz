import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FetchContextProvider } from "./contexts/FetchContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetails";
import UserCardsList from "./pages/UserCardsList";

function App() {
  return (
    <FetchContextProvider>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles-list" element={<UserCardsList />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
    </FetchContextProvider>
  );
}

export default App;
