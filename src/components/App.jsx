import React from "react";
import Landingpage from "./Landingpage";
import Secondpage from "./Secondpage";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./Resources/bg.jpg)",
        backgroundSize: "cover",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Landingpage />
      <Secondpage />
    </div>
  );
};

export default App;