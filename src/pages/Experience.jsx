
import { Link } from "react-router-dom";
import "../styles/Experience.css";

import homewiseImage from "../assets/Homewise.png";
import purpleHouseImage from "../assets/Purple House.jpg";
import gateGourmetImage from "../assets/teamgg copy.JPG";
import funlabImage from "../assets/WhatsApp Image 2026-11-08 at 17.09.23.jpeg";

const experiences = [
  {
    number: "1",
    company: "UNSW Capstone Project",
    location: "Sydney, NSW",
    role: "Software Engineering Intern",
    period: "June 2025 – August 2025",
    category: "FULL-STACK DEVELOPMENT",
    image: homewiseImage,
    imageLabel: "Homewise platform screenshot",
    highlights: [
      "Collaborated in a six-person software engineering team to deliver Homewise, a full-stack property discovery and recommendation platform designed to help first-home buyers and investors make informed decisions.",
      "Developed responsive React and Material UI interfaces across property search, property details, suburb insights, bookmarks and property comparison, integrating frontend components with backend REST APIs.",
      "Built interactive suburb analytics dashboards using Recharts, visualising property price trends, median prices and demographic information to help users understand local market conditions.",
      "Implemented a bookmarking experience using React Context API, allowing users to save properties, add personal notes and retain bookmark state across browser tabs.",
      "Seeded and structured a PostgreSQL database using Prisma ORM, working with more than 100,000 NSW Government property sales records to support property discovery and analysis.",
      "Contributed to the LightGBM-based property ranking system, which used user interaction signals and property features to improve recommendation relevance. Worked with SHAP-based explanations to make model recommendations more interpretable.",
    ],
    skills: [
      "JavaScript",
      "Python",
      "React",
      "Material UI",
      "Recharts",
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "Prisma ORM",
      "LightGBM",
      "SHAP",
      "Optuna",
      "ONNX Runtime",
      "Docker",
      "Git",
      "Google Maps API",
      "Figma",
    ],
  },
  {
    number: "2",
    company: "Purple House",
    location: "Sydney, NSW",
    role: "Engineering Design Project",
    period: "September 2024 – November 2024",
    category: "EMBEDDED SYSTEMS & ENGINEERING",
    image: purpleHouseImage,
    imageLabel: "Heat exchanger prototype photograph",
    highlights: [
      "Collaborated in a six-person engineering team to design and build a compact, dual-section heat exchanger prototype intended to regulate water temperature for dialysis services in remote Australian communities.",
      "Programmed Arduino control logic in C++, using DS18B20 temperature sensor feedback to control the heating coil, water circulation and cooling fans as water moved through the system.",
      "Contributed to the development of separate heating and cooling sections, incorporating a 12V DC heating coil, pump, fans and custom 3D-printed PLA structures. Fusion 360 and CAD were used during the design process.",
      "Team testing demonstrated a 5°C increase in water temperature within 10 minutes, as well as cooling from 50°C to 37°C in under 10 minutes. The prototype was designed around a 12V DC supply and an additional component budget of approximately $50.",
      "Investigated temperature fluctuations during cooling tests and identified limitations in the switching-based control approach, particularly the interaction between the heating and cooling sections.",
      "Contributed to hazard analysis and design recommendations for deployment across Purple House's 18 remote clinics, including improved insulation, PID-based temperature control and potential solar power integration.",
    ],
    skills: [
      "C++",
      "Arduino IDE",
      "DS18B20 Sensors",
      "12V DC Systems",
      "Heating & Cooling Systems",
      "3D Printing",
      "PLA",
      "Fusion 360",
      "CAD",
      "Prototyping",
      "Hazard Analysis",
    ],
  },
  {
    number: "3",
    company: "Gate Gourmet Japan",
    location: "Narita, Chiba, Japan",
    role: "Technical Consultant Intern",
    period: "August 2024 – September 2024",
    category: "PROCESS AUTOMATION & CONSULTING",
    image: gateGourmetImage,
    imageLabel: "Gate Gourmet Japan workplace photograph",
    highlights: [
      "Conducted stakeholder conversations, employee discussions and facility tours at Gate Gourmet's Narita operations to understand warehouse workflows and identify workforce scheduling challenges.",
      "Worked with warehouse stakeholders to investigate issues involving employee shortages, overtime preferences, role allocation, manual processes and scheduling inefficiencies.",
      "Designed and developed an automated rostering workflow using Microsoft Power Automate, Microsoft Forms and Excel VBA, connecting employee form responses with an Excel-based data pipeline.",
      "Built workflow logic to capture employee availability and preferred work positions, while addressing duplicate role assignments through filtering and data-handling rules.",
      "Explored how the workflow could connect with Microsoft Teams Shifts to support a more streamlined employee scheduling process.",
      "Presented a proposed four-week implementation roadmap to senior stakeholders, outlining a practical approach to improving rostering without requiring additional software expenditure.",
      "Adapted technical discussions and requirements gathering to a Japanese corporate environment, communicating operational concepts and proposed solutions with non-technical stakeholders.",
    ],
    skills: [
      "Microsoft Power Automate",
      "Microsoft Forms",
      "Excel VBA",
      "Microsoft Teams Shifts",
      "Process Automation",
      "Requirements Gathering",
      "Stakeholder Engagement",
      "Workflow Design",
      "Process Analysis",
    ],
  },
  {
    number: "4",
    company: "Funlab",
    location: "Sydney, Australia",
    role: "Casual Team Member",
    period: "December 2025 – Present",
    category: "CASUAL EXPERIENCE",
    image: funlabImage,
    imageLabel: "Funlab workplace photograph",
    highlights: [
      "Support daily operations in a fast-paced entertainment venue, balancing guest experience, teamwork and operational efficiency.",
      "Assist customers with enquiries, bookings and venue information, creating a welcoming and positive experience.",
      "Process customer transactions, promote venue offerings and support sales activities.",
      "Coordinate with colleagues during busy periods to maintain efficient service delivery and smooth venue operations.",
      "Develop practical communication, problem-solving and customer relationship skills through regular customer-facing responsibilities.",
    ],
    skills: [
      "Customer Service",
      "Communication",
      "Sales",
      "Venue Operations",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

function ExperienceCard({ experience }) {
  return (
    <article
      className="experience-card"
      style={
        experience.number === "1"
          ? { borderTop: "1px solid #dedbd3", paddingTop: "2rem" }
          : undefined
      }
    >
      <div className="experience-content">
        <div className="experience-meta">
          <span className="experience-number">
            {experience.number}
          </span>

          <span className="experience-category">
            {experience.category}
          </span>
        </div>

        <h2>{experience.company}</h2>

        <div className="experience-role">
          <span>{experience.role}</span>

          <span className="experience-period">
            {experience.period}
          </span>
        </div>

        <p className="experience-location">
          {experience.location}
        </p>

        <ul className="experience-highlights">
          {experience.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <div className="experience-skills">
          {experience.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div
        className="experience-visual"
        style={{
          paddingTop: "1.5rem",
          overflow: "visible",
        }}
      >
        <img
          className="experience-image"
          src={experience.image}
          alt={experience.imageLabel}
          style={{
            display: "block",
            width: "115%",
            maxWidth: "none",
            height: "auto",
            objectFit: "contain",
            transform: "translateY(1rem)",
          }}
        />
      </div>
    </article>
  );
}

function Experience() {
  const professionalExperiences = experiences.filter(
    (experience) => experience.category !== "CASUAL EXPERIENCE"
  );

  const casualExperiences = experiences.filter(
    (experience) => experience.category === "CASUAL EXPERIENCE"
  );

  return (
    <main className="experience-page">
      <header className="experience-header">
        <p className="experience-eyebrow">
          PROFESSIONAL EXPERIENCE
        </p>

        <h1>
          Where I've
          <br />
          <span>made an impact</span>
        </h1>

        <p className="experience-intro">
          From full-stack development and embedded engineering to
          process automation and consulting, my experiences have
          allowed me to turn practical challenges into technical
          solutions while working with diverse teams and stakeholders.
        </p>
      </header>

      <section className="experience-list">
        <div className="professional-experience-group">
          {professionalExperiences.map((experience) => (
            <ExperienceCard
              key={experience.number}
              experience={experience}
            />
          ))}
        </div>

        <div className="casual-experience-group">
          <div className="casual-experience-heading">
            <p>ADDITIONAL EXPERIENCE</p>
            <h2>Beyond the technical</h2>
          </div>

          {casualExperiences.map((experience) => (
            <ExperienceCard
              key={experience.number}
              experience={experience}
            />
          ))}
        </div>
      </section>

      <nav className="experience-navigation">
        <Link to="/education" className="experience-nav-link">
          Back to Education
        </Link>

        <Link
          to="/contact"
          className="experience-nav-link experience-next-link"
        >
          Get in touch
        </Link>
      </nav>
    </main>
  );
}

export default Experience;
