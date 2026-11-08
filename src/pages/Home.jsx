
import { Link } from "react-router-dom";
import "../styles/Home.css";

import profileImage from "../assets/WhatsApp Image 2026-11-08 at 12.12.58.jpeg";

function Home() {
  return (
    <main className="story-home">
      <div className="home-content">
        <div className="home-intro">
          <h1>Shantanu Roy</h1>

          <div className="home-titles">
            <p className="graduate-title">
              Computer Science Graduate
            </p>

            <p className="professional-titles">
              Software Developer · Solutions Designer · Technology Consultant
            </p>

            <p className="personal-title">
              Self-proclaimed Music & Cats Enthusiast
            </p>
          </div>

          <Link to="/about" className="story-link">
            Read about me
          </Link>
        </div>

        <div className="home-image">
          <img
            src={profileImage}
            alt="Portrait of Shantanu Roy"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
