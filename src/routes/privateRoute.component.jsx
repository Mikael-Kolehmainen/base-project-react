import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

/*
  This is a private route. This component is used for other components that should
  be locked behind authentication. When we want to define a route as private, we
  do it in the App.tsx and define our route by calling this component and passsing
  the component that we want to show on the page. Once the user lands on the url,
  the code path will go through this component and check if the authentication is
  active.
*/

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
