import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import PrivateRoute from "./routes/privateRoute.component";
import Error from "./routes/error/error.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<Error title="404 Not Found" message="The page you're looking for doesn't exist." url="/" />}
      />

      {/* Example of private route */}
      <Route path="/private" element={<PrivateRoute component={() => <></>} />} />
    </Routes>
  );
};

export default App;
