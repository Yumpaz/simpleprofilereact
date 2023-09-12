import React from "react";
import Profile from "./profile"

const data = {
    email: "jenny.jenkins@example.com",
}

const App = () => {
  return (
    <>
      <Profile user={data}/>
    </>
  );
};

export default App;