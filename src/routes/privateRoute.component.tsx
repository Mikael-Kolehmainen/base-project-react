import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }: { component: () => JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Do authentication stuff here...
  }, []);

  if (isFetching) {
    return <></>;
  }

  return isAuthenticated ? <Component /> : <Navigate to="" />;
};

export default PrivateRoute;
