import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-heading">About Me!</h2>
     <div className="about-content">
  <p>
    I’m Syed Luqmaan, a Frontend & Mobile Developer with a strong foundation in building modern, scalable applications using <span className="highlighted-text">React.js</span> and <span className="highlighted-text">React Native</span>. I specialize in creating intuitive user interfaces, optimizing performance, and translating design concepts into responsive, production-ready code.
  </p>

  <p>
    I've contributed to diverse projects ranging from <span className="highlighted-text">vendor management platforms and healthcare solutions to full-stack content systems</span>. My experience spans across state management with Redux, real-time databases with Firebase, backend integration using Node.js and Express, and working with SQL-based databases like PostgreSQL and MySQL.
  </p>

  <p>
   I focus on writing clean, maintainable code and following best practices across the development lifecycle. Whether collaborating in agile teams or working independently, I value strong communication, efficient workflows, and continuous learning to keep up with evolving technologies.
  </p>

  <p>
    My goal is to contribute to impactful products that solve real problems—while constantly growing as a developer. Currently, I’m focused on expanding my full-stack capabilities and taking on challenging frontend roles where I can deliver both technical value and a great user experience.
  </p>

  <p className="favorite-quote-title"><span className="highlighted-text">Favorite Quote:</span></p>
  <p className="favorite-quote">
    <strong>"Greatness comes from humble beginnings; it comes from grunt work. It means you're the least important person in the room — until you change that with results."</strong>
  </p>
</div>

    </div>
  );
}

export default About;
