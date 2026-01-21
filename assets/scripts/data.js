// Fetches the data.

// Iterates and creates timeline DOM elements.

// Appends them into .experience and .training containers.


const experienceData = [
  {
  title: "Consultant",
  org: "CRIF Highmark",
  date: "Sep - Dec 2025",
  duration: 3,
  description: "Deployed a full-stack app on AWS using Docker and Kubernetes."
},
  {
    title: "Web Development Intern",
    org: "Prodigy InfoTech",
    date: "Jan 2024 - Feb 2024",
    duration: 1,
    description: "Built responsive web apps using HTML, CSS, and JavaScript. Developed interactive UI elements and improved code quality with modular practices."
  },
  {
    title: "Data Science Intern",
    org: "TheWebsiteMakers",
    date: "Dec 2023 - Jan 2024",
    duration: 1,
    description: "Developed automated data pipelines in Python and SQL, boosting data processing efficiency by 30%. Conducted data analysis improving forecasting accuracy by 36%."
  },
  {
    title: "Web Development Intern",
    org: "CodSoft",
    date: "Oct 2023",
    duration: 1,
    description: "Created landing pages and login forms, strengthened JavaScript DOM manipulation and responsive design skills."
  },
  {
    title: "Web Development Intern",
    org: "Internselite",
    date: "Mar 2023 - Apr 2023",
    duration: 2,
    description: "Ensured cross-browser compatibility and mobile-first design. Deployed projects using Netlify and practiced version control with GitHub."
  },
  {
    title: "Project Intern",
    org: "Ekeeda Private Ltd",
    date: "Feb 2022 - Jul 2022",
    duration: 6,
    description: "Led an 11-member team to improve marketing strategies, increasing course enrollments by 15%. Cold-called 100+ prospects daily, maintaining a 20–30% conversion rate."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const animDirections = ["left", "right", "top", "bottom"];

  experienceData.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.classList.add('timeline-entry');

    // Assign random fly-in direction
    const randomDir = animDirections[Math.floor(Math.random() * animDirections.length)];
    entry.dataset.anim = randomDir;

    // Bar width logic: longer duration = longer bar
    const barWidth = Math.min(item.duration * 15, 100);

    entry.innerHTML = `
      <span class="date">${item.date}</span>
      <h4>${item.title}</h4>
      <div class="org">${item.org}</div>
      <div class="timeline-bar" style="width: ${barWidth}%"></div>
      <p>${item.description}</p>
    `;

    // Expand on click logic
    entry.addEventListener('click', () => {
      entry.classList.toggle('active');
    });

    timeline.appendChild(entry);
  });

  // Intersection Observer for the animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a slight delay based on index for a "popcorn" effect
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.timeline-entry').forEach(el => observer.observe(el));
});


  
  