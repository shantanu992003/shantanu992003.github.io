import { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import "../styles/About.css";

const milestones = {
  0: {
    title: "Shantanu says Hello World.",
    subtitle: "The beginning.",
    description:
      "My story starts here.",
    location: "MUMBAI",
  },
  1: {
    title: "Experiencing life.",
    subtitle: "Kindergarten, Primary, and High School",
    description:
      "Growing up, discovering new interests and gradually finding my way towards the world of technology.",
    location: "MUMBAI",
  },
  18: {
    title: "A new chapter.",
    subtitle: "University",
    description:
      "Building my foundations in programming, engineering and computational thinking.",
    location: "MUMBAI",
  },
  19: {
    title: "Growing, learning and discovering.",
    subtitle: "Finding my direction",
    description:
      "Developing new skills, exploring different interests and discovering the areas of technology I wanted to pursue.",
    location: "MUMBAI",
  },
  20: {
    title: "A new country. Infinite new possibilities.",
    subtitle: "Moving to Australia",
    description:
      "I moved to Australia to continue my education at the University of New South Wales, embracing a new environment, new challenges and new opportunities.",
    location: "SYDNEY",
  },
  21: {
    title: "Applying my skills.",
    subtitle: "Gate Gourmet & Purple House",
    description:
      "I travelled to Japan for my technical consulting internship with Gate Gourmet Japan. Alongside this, I worked on Purple House, an engineering design project developing a temperature-control solution for remote dialysis clinics.",
    location: "JAPAN · AUSTRALIA",
  },
  22: {
    title: "Using my knowledge to make an impact.",
    subtitle: "Homewise",
    description:
      "I completed Homewise, my UNSW capstone project: a property recommendation platform combining full-stack development and machine learning to help users make more informed property decisions.",
    location: "SYDNEY",
  },
};

const spotifyTrackUrl =
  "https://open.spotify.com/track/7JW8FRWVCOQDs40IjEXdPi";

const spotifyEmbedUrl =
  "https://open.spotify.com/embed/track/7JW8FRWVCOQDs40IjEXdPi?utm_source=generator";

function About() {
  const [sliderPosition, setSliderPosition] = useState(0);

  const selectedAge =
    sliderPosition < 30
      ? Math.floor((sliderPosition / 30) * 18)
      : Math.round(18 + ((sliderPosition - 30) / 70) * 4);

  const selectedMilestone =
    selectedAge >= 1 && selectedAge <= 17
      ? milestones[1]
      : milestones[selectedAge];

  const getSliderPosition = (age) =>
    age === 0 ? 0 : 30 + ((age - 18) / 4) * 70;

  return (
    <main className="about-page">
      {/* SECTION 01 — INTRODUCTION */}
      <section className="about-hero" id="introduction">
        <div className="about-heading">
          <p className="about-eyebrow">01 — A LITTLE INTRODUCTION</p>

          <h1>
            Beyond the
            <br />
            <span>Resumé</span>
          </h1>

          <p className="about-subheading">
            An empath with a technical background, and an interest in
            creating things that genuinely help people.
          </p>
        </div>

        <div className="about-intro-grid">
          <div className="about-intro-text">

            <h2>
              Hi! I am a Computer Science graduate from the University of New South
              Wales.
            </h2>

            <p>
              I'm interested in the intersection of technology, design and
              real-world problem-solving. My experience spans full-stack
              development, embedded systems and process automation.
            </p>

            <p>
              What I enjoy most is taking an idea, understanding the problem
              behind it, and figuring out how technology can turn it into
              something practical and meaningful.
            </p>

            <p>
              I'm naturally curious, enjoy learning across disciplines, and
              value the people and perspectives that make collaborative work
              possible.
            </p>

            <div className="about-location">
              <span>BASED IN</span>
              <strong>Sydney, Australia</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — APPROACH */}
      <section className="about-approach" id="approach">
        <div className="about-section-heading">
          <p className="about-eyebrow">02 — HOW I THINK</p>

          <h2>
            Technology is a tool.
            <br />
            <span>Understanding is the starting point.</span>
          </h2>
        </div>

        <div className="about-approach-grid">
          <article className="approach-item">
            <span className="approach-number">01</span>
            <h3>Stay curious.</h3>
            <p>
              I enjoy asking questions, exploring unfamiliar ideas and
              learning how things work. Curiosity is often where my best
              ideas begin.
            </p>
          </article>

          <article className="approach-item">
            <span className="approach-number">02</span>
            <h3>Think across disciplines.</h3>
            <p>
              I like connecting different disciplines to brainstorm solutions. Looking at
              a problem from different perspectives often leads to better
              solutions.
            </p>
          </article>

          <article className="approach-item">
            <span className="approach-number">03</span>
            <h3>Build with purpose.</h3>
            <p>
              I believe technology should solve real problems. I enjoy
              translating complex requirements into practical, accessible
              experiences.
            </p>
          </article>

          <article className="approach-item">
            <span className="approach-number">04</span>
            <h3>Keep growing.</h3>
            <p>
              Every project, conversation and new environment is an
              opportunity to learn. I value progress over having everything
              figured out.
            </p>
          </article>
        </div>
      </section>

      {/* SECTION 03 — TIMELINE */}
      <section className="about-timeline" id="timeline">
        <div className="about-section-heading">
          <p className="about-eyebrow">03 — A FEW YEARS IN THE MAKING</p>

          <h2>
            A timeline of
            <br />
            <span>becoming.</span>
          </h2>

          <p className="timeline-intro">
            Every chapter brought something new. Move through the years to
            explore a few of the experiences that shaped my journey.
          </p>
        </div>

        <div className="timeline-card">
          <div className="timeline-age">
            <span>AGE</span>
            <strong>{selectedAge}</strong>
          </div>

          <div className="timeline-details">
            <p className="timeline-location">
              {selectedMilestone.location}
            </p>

            <h3>{selectedMilestone.title}</h3>

            <h4>{selectedMilestone.subtitle}</h4>

            <p className="timeline-description">
              {selectedMilestone.description}
            </p>
          </div>

          <div className="timeline-slider-container">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={sliderPosition}
              onChange={(event) =>
                setSliderPosition(Number(event.target.value))
              }
              className="timeline-slider"
              style={{
                "--slider-progress": `${sliderPosition}%`,
              }}
              aria-label="Explore my life by age"
            />

            <div className="timeline-age-labels">
              {[0, 18, 19, 20, 21, 22].map((age) => (
                <button
                  key={age}
                  type="button"
                  className={selectedAge === age ? "active" : ""}
                  onClick={() => setSliderPosition(getSliderPosition(age))}
                  aria-pressed={selectedAge === age}
                >
                  {age}
                </button>
              ))}
            </div>

            <p className="timeline-hint">
              DRAG TO EXPLORE · SELECT AN AGE TO DISCOVER MORE
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — PERSONAL SIDE AND MUSIC */}
      <section className="about-personal" id="outside-work">
        <div className="about-personal-content">
          <p className="about-eyebrow">04 — OUTSIDE THE SCREEN</p>

          <h2>
            There's more to me
            <br />
            <span>than technology.</span>
          </h2>

          <p>
            I'm a self-proclaimed music enthusiast. I enjoy discovering
            music, exploring different sounds and appreciating the
            creativity behind it.
          </p>

          <p>
            I also believe curiosity shouldn't stop at the boundaries of a
            job title. I'm interested in exploring different disciplines,
            learning new things and finding inspiration in unexpected
            places.
          </p>
        </div>

        <div className="about-music-art">
          <div className="music-player">
            <p className="about-small-heading">
              A LITTLE SOMETHING TO LISTEN TO
            </p>

            <h3>Currently on repeat.</h3>

            <iframe
              title="Listen to my favourite song on Spotify"
              src={spotifyEmbedUrl}
              width="100%"
              height="152"
              style={{ border: 0, borderRadius: "12px" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div className="music-qr">
            <div className="qr-code">
              <QRCode
                value={spotifyTrackUrl}
                size={140}
                bgColor="#f7f6f2"
                fgColor="#25251f"
                level="M"
              />
            </div>

            <p>TAKE IT WITH YOU</p>
            <span>Scan to listen on Spotify.</span>
          </div>
        </div>
      </section>

      {/* SECTION 05 — WHAT'S NEXT */}
      <section className="about-next" id="whats-next">
        <div className="about-next-content">
          <p className="about-eyebrow">05 — WHAT'S NEXT</p>

          <h2>
            Still learning.
            <br />
            <span>Still building.</span>
          </h2>

          <p>
            I'm looking forward to the opportunities, challenges and
            collaborations ahead. If there's one thing I've learned so far,
            it's that there's always something new worth exploring.
          </p>

          <p>
            Here's a little more about the experiences and work that have
            brought me here.
          </p>
        </div>
      </section>

      {/* STORY NAVIGATION — NO GLOBAL NAVBAR OR FOOTER */}
      <nav className="about-navigation" aria-label="Story navigation">
        <Link to="/" className="about-back-link">
          Back to Home
        </Link>

        <Link to="/education" className="about-next-link">
          Continue to Education
        </Link>
      </nav>
    </main>
  );
}

export default About;