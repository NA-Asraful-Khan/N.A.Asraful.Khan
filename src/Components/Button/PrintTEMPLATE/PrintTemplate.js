// PrintTemplate.js
import React from "react";
import "./PrintTemplate.css"; // Include CSS specific for the print template
const resumeData = [
  {
    type: "objective",
    title: "Professional Summary",
    content:
      "Results-driven MERN Stack Developer with 6 months of hands-on experience building scalable web applications. Passionate about creating efficient, user-friendly solutions using modern technologies and best practices.",
  },
  {
    type: "experience",
    title: "Professional Experience",
    jobs: [
      {
        title: "Junior Node Js Developer - STITBD.",
        duration: "May 2024 - Present (8 months)",
        responsibilities: [
          "Developed and maintained full-stack web applications using Next.js, React.js, and Node.js",
          "Build OTT Platform and POS service Web Applications",
          "Participated in daily stand-ups and sprint planning meetings in an Agile environment",
        ],
      },
    ],
  },
  {
    type: "projects",
    title: "Projects",
    projects: [
      {
        name: "University Management System",
        links: [
          {
            label: "Live Demo",
            url: "https://uniapp.n-a-asraful-khan.xyz/",
          },
          {
            label: "FrontEnd Code",
            url: "https://github.com/NA-Asraful-Khan/University_Management_Frontend",
          },
          {
            label: "Backend Code",
            url: "https://github.com/NA-Asraful-Khan/University_Management_Backend",
          },
        ],
        description: [
          "Developed a University management system using MERN stack, Redux and AntDesign",
          "Implemented All Functionalty to manage User, Course and Academic Program",
          "Integrated JWT authentication and role-based access control",
        ],
      },
      {
        name: "TODO Application",
        links: [
          {
            label: "Live Demo",
            url: "https://todoapp.n-a-asraful-khan.xyz/",
          },
          {
            label: "Source Code",
            url: "https://github.com/NA-Asraful-Khan/Redux_With_Todos",
          },
        ],
        description: [
          "Developed a Todo Application using MERN stack and Redux",
          "Implemented Update, Delete, Filter Functionality",
        ],
      },
    ],
  },
  {
    type: "skills",
    title: "Technical Skills",
    skills: [
      {
        category: "Frontend",
        items: [
          "React.js",
          "Redux",
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "Material-UI",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "GraphQL"],
      },
      {
        category: "Tools & Others",
        items: [
          "Git",
          "GitHub",
          "VS Code",
          "Postman",
          "npm",
          "Webpack",
          "Jest",
        ],
      },
    ],
  },
  {
    type: "education",
    title: "Education",
    degrees: [
      {
        degree: "BSc in Computer Science and Engineering",
        university: "Bangladesh University",
        graduationYear: "2025",
        gpa: "GPA: 3.5/4.0",
      },
    ],
  },
];
const PrintTemplate = () => {
  const renderSection = (section) => {
    if (section.type === "objective") {
      return <p>{section.content}</p>;
    }

    if (section.type === "experience") {
      return section.jobs.map((job, index) => (
        <div className="job" key={index}>
          <h3>{job.title}</h3>
          <p className="duration">{job.duration}</p>
          <ul>
            {job.responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      ));
    }

    if (section.type === "projects") {
      return section.projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project-header">
            <h3>{project.name}</h3>
            <div className="project-links">
              {project.links.map((link, idx) => (
                <React.Fragment key={idx}>
                  <div className="separator">|</div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
          <ul>
            {project.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>
      ));
    }
    if (section.type === "skills") {
      return (
        <div className="skill-grid">
          {section.skills.map((skill, index) => (
            <div key={index} class="skill-category">
              <h3>{skill.category}</h3>
              <p>{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>
      );
    }
    if (section.type === "education") {
      return section.degrees.map((degree, index) => (
        <div key={index} class="degree">
          <h3 className="printh3">${degree.degree}</h3>
          <p>
            {degree.university} | Graduated: ${degree.graduationYear}
          </p>
          <p>{degree.gpa}</p>
        </div>
      ));
    }
  };
  return (
    <div className="print-template">
      <header>
        <h1 className="printh1">Nur A Asraful Khan</h1>
        <p className="title">MERN Stack Developer</p>
        <div className="contact-info">
          <p>📧 n.a.asraful.khan@gmail.com | 📱 +880 188 183 3329</p>
          <p>
            🔗 linkedin.com/in/na-asraful-khan/ | 💻 github.com/NA-Asraful-Khan
          </p>
          <p>📍 Dhaka, Bangladesh</p>
        </div>
      </header>
      {resumeData.map((section, index) => (
        <section className="printSection" key={index}>
          <h2 className="printh2">{section.title}</h2>
          {renderSection(section)}
        </section>
      ))}
    </div>
  );
};

export default PrintTemplate;
