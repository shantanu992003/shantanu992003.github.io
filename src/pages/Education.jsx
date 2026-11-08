
import { Link } from "react-router-dom";
import "../styles/Education.css";

import unswCampusImage from "../assets/WhatsApp Image 2026-11-08 at 15.20.24.jpeg";
import nmimsCampusImage from "../assets/WhatsApp Image 2026-11-08 at 16.04.22.jpeg";

// UNSW project images
import kmeansOriginal from "../assets/HLS1.png";
import kmeansCompressed from "../assets/HLS2.png";
import toohakImage from "../assets/Toohak.png";
import audioOriginal from "../assets/Audio1.png";
import audioCompressed from "../assets/Audio2.png";

// NMIMS project image
import igniteImage from "../assets/Screenshot 2026-11-08 at 4.04.56 PM.png";

const unswProjects = [
  {
    number: "1",
    title: "Image Compression Using K-Means",
    category: "FPGA · HARDWARE ACCELERATION · IMAGE PROCESSING",
    description: [
      "How can an algorithm that is computationally expensive in software be made significantly faster through specialised hardware? That was the central question behind this project.",
      "Working in a team of four, we developed an image-compression system using K-Means clustering. The algorithm groups image pixels according to the similarity of their RGB values, then replaces each pixel with the representative colour of its cluster. The result is a compressed image that retains much of the visual character of the original.",
      "We began by exploring the algorithm in Python before transitioning to C++ for hardware synthesis. The C++ implementation used lightweight STB image libraries to load and save images, avoiding the integration overhead we encountered with OpenCV. We then adapted the code for Vivado HLS, replacing dynamically allocated vectors with static arrays to make the implementation suitable for FPGA synthesis on the Xilinx Kria KV260.",
      "The optimisation process involved HLS directives such as ARRAY_PARTITION, LOOP_TRIPCOUNT and PIPELINE. These techniques improved memory access and enabled overlapping loop operations, helping the synthesised design process the iterative clustering workload more efficiently.",
    ],
    outcome:
      "The report records a reduction in synthesised algorithm latency from approximately 8.467 seconds to 1.493 seconds — an 82.37% decrease after optimisation.",
    technologies: [
      "C++",
      "Python",
      "K-Means",
      "STB Image Library",
      "Vivado HLS",
      "Kria KV260 FPGA",
      "OpenCV",
      "HLS Pragmas",
    ],
    images: [
      { src: kmeansOriginal, label: "Original image" },
      { src: kmeansCompressed, label: "Compressed image output" },
    ],
    imageLayout: "stacked",
  },
  {
    number: "2",
    title: "Toohak — Quiz Platform Feature Design",
    category: "SOFTWARE DESIGN · USER RESEARCH · PRODUCT THINKING",
    description: [
      "A useful product begins with understanding the people who use it. As part of a team working on Toohak, a quiz platform, I contributed to a future-feature planning project focused on making quiz creation more flexible, collaborative and insightful.",
      "We interviewed five users to understand how they used quiz tools, what frustrated them and what they wished they could do differently. The research surfaced recurring needs: more varied question formats, better collaboration between quiz administrators, and more meaningful insight into participant engagement and performance.",
      "I helped translate these findings into structured user stories, use cases and acceptance criteria. The proposed question-design improvements included matching and sequencing formats, alongside more flexible difficulty and scoring options. For collaboration, we explored invitation workflows, shared editing, revision history and ways to identify individual contributions.",
      "The analytics concepts focused on giving educators a clearer picture of how participants interacted with a quiz — including time spent on questions, completion rates, participation and areas where learners might need additional support. We documented these ideas through interface designs, REST API specifications and application state diagrams, turning research findings into a more concrete technical direction.",
    ],
    outcome:
      "The planning work connected five user interviews to three central feature areas: diverse question types, collaborative quiz development and richer performance analytics.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "Figma",
      "UML Diagrams",
      "Agile",
      "Git Issue Boards",
      "Postman",
    ],
    images: [
      { src: toohakImage, label: "Toohak interface design" },
    ],
    imageLayout: "portrait",
  },
  {
    number: "3",
    title: "Audio Signal Processing",
    category: "EMBEDDED SYSTEMS · DIGITAL SIGNAL PROCESSING · FPGA",
    description: [
      "This project explored how a specialised FPGA platform could capture, process and transform audio signals by combining programmable hardware logic with software running on the board's ARM processor.",
      "The system was built around a Xilinx Kria KV260 and an I2S MEMS microphone. Its audio-capture pipeline used an I2S master protocol to generate the bit-clock and word-select signals, capture incoming samples and transfer them through a buffer towards the processing system. The architecture also incorporated DMA-based data movement and conversion of captured audio into WAV files.",
      "The extended application explored a modular sound-effects suite. Its proposed processing modules included finite impulse response (FIR) filtering, delay, convolutional reverb and dynamic-range compression. The architecture was designed to route audio through selected processing modules, with effects distributed across programmable logic and software.",
      "My assigned software contribution focused on the audio-compression module. Dynamic-range compression reduces the difference between the loudest and quietest parts of an audio signal. The design used a threshold and compression ratio to determine how samples exceeding the threshold should be adjusted, producing a more consistent output level.",
    ],
    outcome:
      "The project brought together microphone capture, hardware/software audio processing and modular sound-effect design on an FPGA-based platform.",
    technologies: [
      "VHDL",
      "C",
      "Vivado",
      "Xilinx Kria KV260",
      "I2S MEMS Microphone",
      "DMA",
      "FIFO",
      "PuTTY",
    ],
    images: [
      { src: audioOriginal, label: "Original audio" },
      { src: audioCompressed, label: "Compressed audio" },
    ],
    imageLayout: "stacked",
  },
];

const nmimsProjects = [
  {
    number: "1",
    title: "Ignite — Event Management Platform",
    category: "FULL-STACK DEVELOPMENT · WEB APPLICATION",
    description: [
      "Ignite was a multi-page, responsive event-management platform designed to make it easier for people to discover events and interact with the teams organising them.",
      "The project brought together the frontend and backend of a web application. Using HTML, CSS and JavaScript, with AngularJS for the client-side experience, I developed the interface across multiple pages and focused on making the experience clear and accessible across different screen sizes.",
      "On the backend, PHP and MySQL supported the application's data and functionality. The platform was designed to let users register, explore available events and engage with the organising team, while the Google Maps API provided a way to incorporate location-based event information.",
      "Working across the different layers of the application gave me an early opportunity to understand how interface design, application logic, data storage and third-party services come together to form a complete product.",
    ],
    outcome:
      "A responsive, multi-page full-stack event-management application connecting event discovery, user registration and organiser engagement.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AngularJS",
      "PHP",
      "MySQL",
      "Google Maps API",
    ],
    images: [
      { src: igniteImage, label: "Ignite event platform" },
    ],
    imageLayout: "portrait",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="education-project">
      <div
        className="education-project-visual"
        style={{
          background: "transparent",
          padding: 0,
          border: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          {project.images.map((image) => (
            <figure
              key={image.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                maxWidth:
                  project.imageLayout === "portrait" ? "320px" : "100%",
                minWidth: 0,
                margin: 0,
                padding: 0,
                gap: "0.65rem",
                background: "transparent",
                border: "none",
              }}
            >
              <img
                src={image.src}
                alt={image.label}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
              />

              <figcaption
                style={{
                  display: "block",
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  color: "#77756f",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="education-project-content">
        <div className="project-heading-row">
          <span className="project-number">{project.number}</span>
          <p className="project-category">{project.category}</p>
        </div>

        <h3>{project.title}</h3>

        <div className="project-description">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="project-outcome">
          <span>THE OUTCOME</span>
          <p>{project.outcome}</p>
        </div>

        <div className="project-technologies">
          <span className="technology-heading">TECHNOLOGIES & TOOLS</span>

          <div className="technology-list">
            {project.technologies.map((technology) => (
              <span className="technology-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Education() {
  return (
    <main className="education-page">

      {/* PAGE INTRODUCTION */}
      <section className="education-hero">
        <p className="about-eyebrow">EDUCATION & ACADEMIC WORK</p>

        <h1>
          Learning by
          <br />
          <span>building</span>
        </h1>

        <p className="education-hero-description">
          My academic journey has taken me across institutions, disciplines
          and technologies. Along the way, I've explored ideas by turning
          coursework into practical projects, from software, automation, and
          consulting, to embedded systems and hardware acceleration.
        </p>
      </section>

      {/* UNSW */}
      <section className="education-institution" id="unsw">
        <div className="institution-heading">
          <div className="institution-number">01 / EDUCATION</div>

          <div className="institution-main">
            <p className="about-small-heading">SYDNEY, AUSTRALIA</p>

            <h2>
              University of
              <br />
              <span>New South Wales</span>
            </h2>

            <div className="institution-details">
              <p className="degree-name">
                Bachelor of Science
                <br />
                <span>Computer Science</span>
              </p>

              <div className="institution-facts">
                <div>
                  <span>ACADEMIC RESULT</span>
                  <strong>WAM 76 · Distinction</strong>
                </div>

                <div>
                  <span>RECOGNITION</span>
                  <strong>Recipient of two scholarships</strong>
                </div>

                <div>
                  <span>COMPLETED</span>
                  <strong>December 2025</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="institution-image">
            <img
              src={unswCampusImage}
              alt="University of New South Wales campus"
            />
          </div>
        </div>

        <div className="institution-projects-title">
          <h3>Projects I did here</h3>
        </div>

        <div className="education-project-list">
          {unswProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      {/* NMIMS */}
      <section className="education-institution nmims-section" id="nmims">
        <div className="institution-heading">
          <div className="institution-number">02 / EDUCATION</div>

          <div className="institution-main">
            <p className="about-small-heading">MUMBAI, INDIA</p>

            <h2>
              NMIMS.
              <br />
              <span>An earlier chapter.</span>
            </h2>

            <p className="institution-introduction">
              My earlier academic experience at NMIMS gave me the opportunity
              to explore software development and build a foundation in
              creating web-based applications.
            </p>
          </div>

          <div className="institution-image">
            <img
              src={nmimsCampusImage}
              alt="NMIMS university campus"
            />
          </div>
        </div>

        <div className="institution-projects-title">
          <h3>Projects I did here</h3>
        </div>

        <div className="education-project-list">
          {nmimsProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="education-closing">
        <p className="about-eyebrow">A CONTINUING EDUCATION</p>

        <h2>
          The best learning
          <br />
          <span>happens by doingx</span>
        </h2>

        <p>
          Each of these experiences has shaped the way I approach problems:
          understand the context, explore the possibilities, work through the
          details and build something useful.
        </p>
      </section>

      {/* STORY NAVIGATION */}
      <nav className="education-navigation" aria-label="Story navigation">
        <Link to="/about" className="education-back-link">
          Back to About
        </Link>

        <Link to="/experience" className="education-next-link">
          Continue to Experience
        </Link>
      </nav>

    </main>
  );
}

export default Education;
