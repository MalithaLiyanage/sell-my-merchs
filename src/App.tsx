import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { MainContext } from "./contexts/MainContext";
import { User } from "./interfaces/Models";
import SignIn from "./pages/auth/SignIn";
import AuthLayout from "./componets/layouts/AuthLayout";

function App() {
  const mainState = useContext(MainContext);

  return (
    <div className="App">
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </div>
  );
}

export default App;
