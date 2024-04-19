import React, { useEffect, useState } from "react";
import { getExample } from "../../backend/backend";

/*
  This is the Home (or the Main) page. This component will always be the landing
  page and is defined as the landing page in App.tsx, the route is '/'.
*/

const Home = () => {
  // Here is an example on how to fetch data using backend files from the db.
  const [example, setExample] = useState<any[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchExample = async () => {
      setIsLoading(true);
      try {
        const response = await getExample();
        setExample(response.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchExample();
  }, []);

  if (isError) {
    return <p>There was an error.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <section>{JSON.stringify(example)}</section>;
};

export default Home;
