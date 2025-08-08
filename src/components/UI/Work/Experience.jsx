import './experience.css';
import React, { useState } from 'react';

function Experience() {
    const [activeTab, setActiveTab] = useState('Shaligram');

    const handleTabClick = (company) => {
        setActiveTab(company);
    };

    return (
       <div className="experience-container" id='experience'>
  <h2 className="experience-heading">Experience</h2>
  <div className="experience-content">
    <div className="tabs">
      <button 
        className={`tab-button ${activeTab === 'Zaniha' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Zaniha')}>
        <strong>03.</strong> Zaniha Technologies
      </button>
      
      <button 
        className={`tab-button ${activeTab === 'MyCLNQ' ? 'active' : ''}`} 
        onClick={() => handleTabClick('MyCLNQ')}>
        <strong>02.</strong> MyCLNQ Health
      </button>

      <button 
        className={`tab-button ${activeTab === 'Maskan' ? 'active' : ''}`} 
        onClick={() => handleTabClick('Maskan')}>
        <strong>01.</strong> Maskan Technologies
      </button>
    </div>

    <div className="tab-content">

      {/* Zaniha Technologies */}
      {activeTab === 'Zaniha' && (
        <div className="experience-details fade-in">
          <h4>Frontend Developer <span>[ Oct 2024 – Feb 2025 ]</span></h4>
          <ul>
            <li>Worked as a key member of the frontend team at Zaniha Technologies, contributing to the development of core internal tools and client-facing products.</li>
            <li>Developed a fully functional <span className="highlighted-text">vendor management application</span> using React Native, improving task assignment workflows for 500+ users and reducing assignment time by 35%.</li>
            <li>Designed and implemented an <span className="highlighted-text">admin dashboard</span> with real-time operational control, integrated through REST APIs for seamless backend communication.</li>
            <li>Led the frontend implementation of a new <span className="highlighted-text">company website</span> using React.js, resulting in a 20% improvement in mobile engagement through responsive UI and modern design principles.</li>
            <li>Worked collaboratively with designers, backend developers, and QA engineers to ensure high code quality, performance optimization, and bug-free deployment.</li>
          </ul>
        </div>
      )}

      {/* MyCLNQ Health */}
      {activeTab === 'MyCLNQ' && (
        <div className="experience-details fade-in">
          <h4>Frontend Developer Intern <span>[ Feb 2024 – Apr 2024 ]</span></h4>
          <ul>
            <li>Interned remotely with a Singapore-based healthcare tech startup to improve key features in their cross-platform mobile app.</li>
            <li>Upgraded critical modules like <span className="highlighted-text">appointment booking, patient profiles, and health tracking</span> using React Native.</li>
            <li>Fixed numerous <span className="highlighted-text">cross-platform UI bugs</span> and enhanced responsiveness, contributing to improved app performance and a higher rating on app stores.</li>
            <li>Worked closely with the core development team to understand codebase structure, contribute to sprint goals, and participate in daily stand-ups.</li>
          </ul>
        </div>
      )}

      {/* Maskan Technologies */}
      {activeTab === 'Maskan' && (
        <div className="experience-details fade-in">
          <h4>Frontend Development Trainee <span>[ Feb 2023 – Dec 2023 ]</span></h4>
          <ul>
  <li>
    Worked as a <span className="highlighted-text">Frontend React Native Developer</span> on a healthcare super-app 
    (similar to Practo) with three core modules — <span className="highlighted-text">Doctor, Patient, and Admin</span>.
  </li>
  <li>
    Implemented pixel-perfect UI by translating <span className="highlighted-text">Figma designs</span> into 
    scalable and reusable <span className="highlighted-text">React Native components</span> using Expo.
  </li>
  <li>
    Integrated <span className="highlighted-text">REST APIs</span> for booking, consultation, and 
    medical record management, ensuring smooth cross-module communication.
  </li>
  <li>
    Collaborated with backend developers and QA teams in an 
    <span className="highlighted-text"> Agile/Scrum</span> environment to deliver iterative updates.
  </li>
  <li>
    Optimized performance across Android and iOS by reducing render cycles, improving navigation 
    flow, and ensuring responsive design for multiple screen sizes.
  </li>
</ul>

        </div>
      )}

    </div>
  </div>
</div>

    );
}

export default Experience;
