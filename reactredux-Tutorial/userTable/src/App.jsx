import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <UserDetails />
    </div>
  );
}
export default App;
