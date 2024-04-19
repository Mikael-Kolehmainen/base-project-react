import React from "react";
import { Link } from "react-router-dom";

const Error = ({ title, message, url }: { title: string; message: string; url: string }) => {
  return (
    <section>
      <article>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to={url}>Go back</Link>
      </article>
    </section>
  );
};

export default Error;
