import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import PrivateRoute from "./routes/privateRoute.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Example of private route */}
      <Route path="/private" element={<PrivateRoute component={() => <></>} />} />
    </Routes>
  );
};

export default App;
