
function Website() {
  const pages = [
    ["About", "/website/about"],
    ["Education", "/website/education"],
    ["Experience", "/website/experience"],
    ["Projects", "/website/projects"],
    ["Contact", "/website/contact"],
  ];

  return (
    <main style={{ padding: "10vh 10vw" }}>
      <p>THE COMPLETE PORTFOLIO</p>
      <h1>Explore my work.</h1>

      {pages.map(([name, link]) => (
        <p key={link}>
          <a href={link}>{name} ↗</a>
        </p>
      ))}
    </main>
  );
}

export default Website;
