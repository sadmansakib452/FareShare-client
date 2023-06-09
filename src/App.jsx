import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Error from "./components/Error/Error";
import SelectDriver from "./pages/Ride/SelectDriver";
import SearchRide from "./pages/Ride/SearchRide";
export const UserContext = createContext();
import CreateRide from './pages/Ride/CreateRide'
import RideStatus from "./pages/Ride/RideStatus";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {};
  });

  useEffect(() => {
    console.log('app',loggedInUser)
    window.localStorage.setItem("user", JSON.stringify(loggedInUser) ? JSON.stringify(loggedInUser) : null);
  }, [loggedInUser]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/searchRide" element={<SearchRide/>} />
          <Route path="/selectDriver" element={<SelectDriver/>} />
          <Route path="/createRide" element={<CreateRide/>} />
          <Route path="/rideStatus" element={<RideStatus/>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
