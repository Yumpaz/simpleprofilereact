import React from "react";
import Profile from "./profile"

const data = {
    name: "Jenny Jekins",
    email: "jenny.jenkins@example.com",
    files: "Files section",
    location: "Location section",
    telephone: "(664)-349-1444",
    padlock: "Padlock section",
}

const App = () => {
  return (
    <>
      <Profile user={data}/>
    </>
  );
};

export default App;