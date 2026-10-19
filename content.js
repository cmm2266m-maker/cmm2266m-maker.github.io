// ============================================================
//  EDIT THIS FILE to update your portfolio.
//  Everything on the site comes from here; you never need to
//  touch index.html, style.css, or render.js.
//
//  To add a project: copy one { ... } block inside `projects`,
//  paste it at the top of the list, and change the text.
//  Put photos in the images/ folder and list them by filename.
// ============================================================

const PORTFOLIO = {
  name: "Your Name",
  eyebrow: "Mechanical Engineering · Class of 2028",
  tagline:
    "I design, build, and test mechanical systems, from CAD and FEA through fabrication and the test stand.",
  resumeFile: "resume.pdf", // drop your resume PDF next to index.html with this name

  contact: [
    { label: "Email", url: "mailto:you@example.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { label: "GitHub", url: "https://github.com/your-username" },
  ],

  projects: [
    {
      title: "Example: Quadcopter Frame Redesign",
      when: "Spring 2026 · Team of 4",
      role: "Lead structural designer",
      summary:
        "Redesigned a carbon-fiber frame to cut weight 18% while keeping arm deflection under 1 mm.",
      tags: ["SolidWorks", "ANSYS FEA", "Carbon fiber", "3D printing"],
      cover: "", // e.g. "images/quad-cover.jpg" (leave blank for a placeholder)
      details: [
        "Ran static and modal FEA to find stress concentrations at the arm mounts",
        "Iterated through 3 prototypes, validated with a load-cell test rig",
        "Final design flew 6 minutes longer per battery",
      ],
      photos: [
        // { src: "images/quad-test.jpg", caption: "Deflection test on the rig" },
      ],
      link: "", // optional: report PDF, video, or GitHub
    },
    {
      title: "Example: Dynamics Lab: Pendulum Damping",
      when: "Fall 2025 · Course project",
      role: "Data analysis & modeling",
      summary:
        "Measured damping in a compound pendulum and matched it to an ODE model within 4%.",
      tags: ["MATLAB", "Data acquisition", "Dynamics"],
      cover: "",
      details: [
        "Built the encoder setup and logged angle data at 500 Hz",
        "Fit viscous and Coulomb damping terms with least squares",
      ],
      photos: [],
      link: "",
    },
    {
      title: "Example: Formula SAE Brake Pedal",
      when: "2025 · Student team",
      role: "Design & machining",
      summary:
        "Topology-optimized aluminum pedal, CNC machined in-house; 30% lighter than last year's.",
      tags: ["Fusion 360", "CNC", "GD&T", "Topology optimization"],
      cover: "",
      details: [],
      photos: [],
      link: "",
    },
  ],

  experience: [
    {
      title: "Engineering Intern",
      org: "Company Name",
      when: "May 2026 – Aug 2026",
      bullets: [
        "What you did, with a number if you can (e.g. reduced cycle time 12%)",
        "Tools you used and who you worked with",
      ],
    },
    {
      title: "Team Member, Formula SAE",
      org: "Your University",
      when: "2024 – Present",
      bullets: ["Your responsibilities on the team"],
    },
  ],

  education: [
    {
      school: "Your University",
      degree: "B.S. Mechanical Engineering",
      when: "Expected May 2028",
      note: "GPA 3.x · Relevant coursework: Dynamics, Statics, Thermodynamics, Materials",
    },
  ],

  skills: {
    "CAD & Simulation": ["SolidWorks", "Fusion 360", "ANSYS", "AutoCAD"],
    "Programming": ["MATLAB", "Python", "Arduino / C++"],
    "Fabrication": ["3D printing", "CNC milling", "Lathe", "Welding"],
    "Analysis": ["FEA", "GD&T", "Data acquisition", "Technical writing"],
  },
};
