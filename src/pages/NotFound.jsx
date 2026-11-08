
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <p className="not-found-eyebrow">ERROR 404</p>

      <h1>
        Lost in
        <br />
        <span>the wrong place?</span>
      </h1>

      <p className="not-found-description">
        It looks like this page doesn't exist or may have moved.
        Let's get you back on track.
      </p>

      <Link to="/" className="not-found-link">
        Return to homepage <span>↗</span>
      </Link>
    </main>
  );
}

export default NotFound;
