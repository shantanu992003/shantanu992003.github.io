import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="nav-logo">
        SR
      </NavLink>

      <nav className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;