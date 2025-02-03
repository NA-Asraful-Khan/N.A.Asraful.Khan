// PrintTemplate.js
import React from "react";
import "./PrintTemplate.css"; // Include CSS specific for the print template
const resumeData = [
  {
    type: "objective",
    title: "Professional Summary",
    content:
      "Results-driven MERN Stack Developer with 1 year of hands-on experience building scalable web applications. Passionate about creating efficient, user-friendly solutions using modern technologies and best practices.",
  },
  {
    type: "experience",
    title: "Professional Experience",
    jobs: [
      {
        title: "Jr. Node Js Developer - STITBD.",
        duration: "May 2024 - Present (1 Year)",
        responsibilities: [
          "Designed and developed an enterprise-level multi-vendor e-commerce and OTT solution.",
          "Conducted software requirement analysis and designed according to requirements.",
          "Developed Application using Nextjs with Server Side Rendering(SSR).",
          "Technologies used: Node.js, Express.js, MySQL, React, Next.js, Redux, and Tailwind CSS.",
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
            label: "uniapp.n-a-asraful-khan.xyz",
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
        name: "Dhuum (OTT platform)",
        links: [
          {
            label: "dhuum.vercel.app",
            url: "https://dhuum.vercel.app/",
          },
        ],
        description: [
          "It is a video streaming web application where users can subscribe and enjoy video streaming.",
          "User authentication and authorization, chunking video upload and HLS video process using Nextjs, React, RTK query, Tailwind CSS, MySQL, Prisma, Node.js & Express.js, etc.",
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
