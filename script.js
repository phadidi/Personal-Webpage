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
      window.history.pushState({ page }, '', `#${page}`);
      localStorage.setItem('currentPage', page);
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
                        <img src="assets/images/profile-pic.jpg" alt="Parsa Hadidi" class="profile-picture">
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
                            <p><a href="#resume" onclick="router.navigate('resume'); return false;" class="resume-link">View my resume here</a></p>
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
                                <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM7.05 8.23q0 .33-.23.56-.23.22-.56.22-.32 0-.55-.22-.23-.23-.23-.56 0-.34.23-.57.23-.23.55-.23.33 0 .56.23.23.23.23.57zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H1.13q-.46 0-.8-.32-.32-.34-.32-.8V12l10.24-7.71q.32-.24.75-.24t.75.24L24 12zM2 12.63v7.87h20v-7.87l-9.75-7.35q-.25-.18-.25-.18-.25 0-.25.18L2 12.63z"/></svg> Outlook</h3>
                                <a href="mailto:hadidip@hotmail.com">hadidip@hotmail.com</a>
                            </div>
                            <div class="contact-method">
                                <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/parsa-hadidi-36899640/" target="_blank">Connect with me</a>
                            </div>
                            <div class="contact-method">
                                <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub</h3>
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

  // Load initial page from URL hash or localStorage
  const hash = window.location.hash.slice(1);
  const savedPage = localStorage.getItem('currentPage');
  // If no hash in URL, go to home (ignores localStorage)
  const initialPage = hash || (window.location.hash === '' ? 'home' : savedPage) || 'home';
  router.navigate(initialPage);

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || window.location.hash.slice(1) || 'home';
    router.navigate(page);
  });

  // Hamburger menu toggle
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  // Make contact-method divs clickable
  document.addEventListener('click', function (e) {
    const contactMethod = e.target.closest('.contact-method');
    if (contactMethod) {
      const link = contactMethod.querySelector('a');
      if (link && !e.target.closest('a')) {
        link.click();
      }
    }
  });
});
