import './skills.css';

function Skills() {
  const skills = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', title: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg', title: 'React Native' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg', title: 'Redux' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg', title: 'Firebase' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', title: 'FastAPI' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', title: 'JavaScript (ES6+)' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', title: 'HTML5' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', title: 'CSS3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg', title: 'Tailwind CSS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg', title: 'Bitbucket' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', title: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', title: 'Mysql' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg', title: 'Expo' },
    {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', title: 'TypeScript' },
    {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', title: 'MongoDb' },
   
    
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.src} className="skill-icon" alt={skill.title} />
            <span className="skill-title">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
