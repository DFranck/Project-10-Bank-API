import { Link } from "react-router-dom";
import "./index.scss";
export const NotFound = () => {
  return (
    <main className="main">
      <h1>
        404
        <br />
        Page not found
      </h1>
      <Link to="/login">Go back to logIn</Link>
    </main>
  );
};
