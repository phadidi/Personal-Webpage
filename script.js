// Single Page Application Router
class Router {
  constructor() {
    this.routes = {
      home: this.renderHome,
      about: this.renderAbout,
      resume: this.renderResume,
      contact: this.renderContact,
    };
    this.currentPage = 'home';
  }

  navigate(page) {
    if (this.routes[page]) {
      this.currentPage = page;
      document.getElementById('app').innerHTML = this.routes[page]();
      this.updateActiveNav(page);
    }
  }

  updateActiveNav(page) {
    document.querySelectorAll('.nav-menu a').forEach((link) => {
      link.classList.remove('active');
      if (link.dataset.page === page) {
        link.classList.add('active');
      }
    });
  }

  renderHome() {
    return `
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-text-top">
                        <h1>Welcome to Turquoise Penguin</h1>
                    </div>
                    <div class="hero-image">
                        <img src="assets/images/profile-pic.png" alt="Parsa Hadidi" class="profile-picture">
                    </div>
                    <div class="hero-text-bottom">
                        <p>Software Engineer with background in cloud deployments & integrations</p>
                    </div>
                    <div class="hero-buttons">
                        <button class="cta-button" onclick="router.navigate('resume')">My Experience</button>
                        <button class="cta-button" onclick="router.navigate('contact')">Contact Me</button>
                    </div>
                </div>
            </section>
            <section class="featured">
                <div class="container">
                    <h2>Featured Work</h2>
                    <div class="project-grid">
                        <div class="project-card">
                            <h3>Web Applications</h3>
                            <p>Development of web applications using Blazor, plus prior experience using React & TypeScript</p>
                        </div>
                        <div class="project-card">
                            <h3>REST APIs & Databases</h3>
                            <p>Creation of C# ASP.NET API Endpoints and maintenance of SQL stored procedures, with familiarity in WSO2, Java, XML, PostgreSQL, Node.js & NoSQL</p>
                        </div>
                        <div class="project-card">
                            <h3>Cloud Integrations</h3>
                            <p>Experience deploying applications to AWS cloud and integrating with SnapLogic</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  renderAbout() {
    return `
            <section class="page-content">
                <div class="container">
                    <h1>About Me</h1>
                    <div class="about-content">
                        <div class="about-text">
                            <p>Hi, I'm Parsa, a software engineer with past certifications in AWS & experience developing applications as an Agile Scrum individual contributor using Blazor, ASP.NET, C#, SQL Stored Procedures, Java, XML, JavaScript, React, TypeScript, Node.js, AWS Lambda, & Serverless YAML. I have technical experience in full stack application development & information security practices, plus SnapLogic integrations with legacy systems and PowerShell scripting for batch file copy operations.</p>
                            <p><a href="#" onclick="router.navigate('resume')" class="resume-link">View my resume here</a></p>
                        </div>
                        <div class="certifications-section">
                            <h3>My Certifications</h3>
                            <p class="certifications-text">Currently I hold an AWS Security – Specialty certificate. Previously I have held AWS Solutions Architect Associate and AWS Developer Associate certificates.</p>
                        </div>
                        <div class="certifications-image">
                            <img src="assets/images/certificates.png" alt="AWS Certificates" class="certificates-img">
                        </div>
                        <div class="skills">
                            <h3>Core Skills</h3>
                            <div class="skill-tags">
                                <span class="skill-tag">C#</span>
                                <span class="skill-tag">Blazor</span>
                                <span class="skill-tag">REST APIs</span>
                                <span class="skill-tag">SQL</span>
                                <span class="skill-tag">AWS</span>
                                <span class="skill-tag">React</span>
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">Java</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  renderResume() {
    return `
            <section class="page-content resume-page">
                <h1>My Resume</h1>
                <div class="pdf-download">
                    <a href="assets/documents/Parsa Hadidi Resume 2025.pdf" download class="pdf-link">📄 Download PDF Version</a>
                </div>
                <div class="resume-content">
                    <div class="resume-section">
                        <h2>Skills</h2>
                        <ul class="skills-list">
                            <li>C#, Blazor, ASP.NET, SQL Stored Procedures, REST APIs, SnapLogic</li>
                            <li>React, JavaScript, Node.js, AWS, Serverless, TypeScript, NoSQL</li>
                            <li>Java, XML, XSLT, PowerShell</li>
                            <li>GitHub Actions, Visual Studio, Agile Scrum, Unit Testing, Jest, Spring Boot, WSO2, React Native, Figma, Splunk</li>
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h2>Experience</h2>
                        <div class="experience-grid">
                                <div class="experience-item">
                                    <h3>Software Engineer</h3>
                                    <p class="company">Prime Therapeutics • January 2024 – Present</p>
                                    <p class="location">US, Minnesota, Eagan • Remote</p>
                                    <ul>
                                        <li>Development & enhancement of frontend screens and backend API endpoints & microservices in physician letter review web applications using C#, Blazor, & ASP.NET with GitHub version control & GitHub Actions CI/CD</li>
                                        <li>Development & enhancement of SnapLogic pipelines to automate system maintenance and data retrieval processes across Amazon RDS SQL Server & MySQL databases, REST APIs, and Amazon S3 storage</li>
                                        <li>Enhancement & maintenance of SQL Stored Procedure intermediaries for REST APIs & AWS Lambda functions for reading & processing customer health data across multiple clients</li>
                                        <li>Development & usage of unit and integration test cases for applications hosted on Amazon EC2 Linux environments</li>
                                        <li>Participation in Agile Scrum SDLC stand-up calls, story-mapping meetings, and production software deployment releases</li>
                                        <li>Designed PowerShell scripts to batch copy documents from Amazon S3 storage for auditing purposes</li>
                                        <li>Received training in WSO2, Synapse XML, Maven, & Java as part of developing a modernized REST API integration to replace legacy applications</li>
                                    </ul>
                                </div>
                                <div class="experience-item">
                                    <h3>Software Engineer, AWS</h3>
                                    <p class="company">Presidio • January 2022 – May 2023</p>
                                    <p class="location">US, California, Pleasanton • Remote</p>
                                    <ul>
                                        <li>Development & enhancement of frontend screens based on Figma UI wireframes for a multiplatform conferencing app in TypeScript, Electron, Redux, React Native, Kotlin, Java, Spring Boot, Maven, JDBC, & Amazon Chime SDK under Agile Scrum SDLC, with Buildkite CI/CD pipelines, GitHub version control, Jest unit testing automation, JIRA tickets, & Atlassian Confluence</li>
                                        <li>Development of front end browser applications using React, HTML, CSS, Material UI, & Redux with integrations for GraphQL APIs for displaying professional sports real-time scoreboards & car parts product catalogs</li>
                                        <li>Development of Node.js backend applications & microservices utilizing Express.js, Serverless Framework, YAML Amazon CloudFormation, DynamoDB, & AWS Lambda functions for front end integrations as part of handling product catalog search queries</li>
                                        <li>Familiarity with Amazon S3 & CloudFront hosting, Cognito User Pool authentication, RDS MySQL & DynamoDB databases, SQS queues, AngularJS, & WebSocket API services as part of implementing a food service application & college attendance tracker</li>
                                    </ul>
                                </div>
                                <div class="experience-item">
                                    <h3>Software Engineer I</h3>
                                    <p class="company">IDEMIA • June 2021 – January 2022</p>
                                    <p class="location">US, California, Anaheim</p>
                                    <ul>
                                        <li>Development & unit testing of the MorphoTrak biometrics application using Scaled Agile Framework (SAFe) methodologies</li>
                                        <li>Enhancement of XML schema screens in hybrid cloud infrastructures for fingerprints & facial recognition</li>
                                        <li>Performed test cases on MorphoTrak application code written in XML, Java, & JavaScript</li>
                                    </ul>
                                </div>
                                <div class="experience-item">
                                    <h3>Information Security, Intern</h3>
                                    <p class="company">Warner Bros. Discovery • October 2020 – December 2020</p>
                                    <p class="location">US, California, Burbank • Remote</p>
                                    <ul>
                                        <li>Measurement & creation of efficiencies in the WarnerMedia Security Operations Center, emphasizing the relevance of Mean Time to Remediation & the key performance indicators (KPIs) for internal security systems</li>
                                        <li>Designed Splunk dashboard visualizations & reports for WarnerMedia internal systems based on incident response security data retrieved from a Python API interacting with Cortex XSOAR</li>
                                        <li>Training in cybersecurity fundamentals, operations, information security best practices, & system performance impact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
  }

  renderContact() {
    return `
            <section class="page-content">
                <div class="container">
                    <h1>Get In Touch</h1>
                    <div class="contact-content">
                        <div class="contact-text">
                            <p>You can contact me via LinkedIn or email. I also have a github account showcasing some of my personal projects, including this webpage.</p>
                        </div>
                        <div class="contact-methods">
                            <div class="contact-method">
                                <h3>📧 Email</h3>
                                <a href="mailto:hadidip@hotmail.com">hadidip@hotmail.com</a>
                            </div>
                            <div class="contact-method">
                                <h3>💼 LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/parsa-hadidi-36899640/" target="_blank">Connect with me</a>
                            </div>
                            <div class="contact-method">
                                <h3>🐙 GitHub</h3>
                                <a href="https://github.com/phadidi" target="_blank">View my code</a>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        `;
  }
}

// Initialize app
const router = new Router();

document.addEventListener('DOMContentLoaded', function () {
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', function () {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Navigation handling
  document.querySelectorAll('[data-page]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      router.navigate(this.dataset.page);
      // Hide hamburger menu after navigation
      const navMenu = document.getElementById('navMenu');
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Load initial page
  router.navigate('home');

  // Hamburger menu toggle
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }
});
