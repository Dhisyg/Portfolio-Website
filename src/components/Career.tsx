import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>VRTX</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              I work as a Full Stack Developer at VRTX, building scalable web applications, modern websites, and AI-powered digital solutions. I handle both frontend and backend development, focusing on performance, clean architecture, and SEO-friendly systems that help businesses grow online.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance & Personal Project </h4>
                <h5>Self-Driven Work</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Worked on multiple real-world projects including portfolio websites, AI chatbots, automation systems, and full stack applications. Focused on building responsive, fast, and user-friendly digital products while improving problem-solving and development skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning & Skill Development</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2024 To Now</h3>
            </div>
            <p>Started my journey in web development by learning frontend and backend technologies, programming fundamentals, and modern development tools. Built small projects to understand real-world development and strengthen core concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
