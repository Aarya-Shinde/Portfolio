// Fetches the data.

// Iterates and creates timeline DOM elements.

// Appends them into .experience and .training containers.

const experienceData = [
  {
    title: "Web Development Intern",
    org: "Prodigy InfoTech",
    date: "Jan 2024 - Feb 2024",
    duration: 1,
    certificateUrl: "",
    description:
      "Built responsive web apps using HTML, CSS, and JavaScript. Developed interactive UI elements and improved code quality with modular practices."
  },
  {
    title: "Data Science Intern",
    org: "TheWebsiteMakers",
    date: "Dec 2023 - Jan 2024",
    duration: 1,
    certificateUrl: "https://example.com/datascience-certificate.pdf",
    description:
      "Developed automated data pipelines in Python and SQL, boosting data processing efficiency by 30%. Conducted data analysis improving forecasting accuracy by 36%."
  },
  {
    title: "Web Development Intern",
    org: "CodSoft",
    date: "Oct 2023",
    duration: 1,
    certificateUrl: "https://example.com/datascience-certificate.pdf",
    description:
      "Created landing pages and login forms, strengthened JavaScript DOM manipulation and responsive design skills."
  },
  {
    title: "Web Development Intern",
    org: "Internselite",
    date: "Mar 2023 - Apr 2023",
    duration: 2,
    certificateUrl: "https://example.com/datascience-certificate.pdf",
    description:
      "Ensured cross-browser compatibility and mobile-first design. Deployed projects using Netlify and practiced version control with GitHub."
  },
  {
    title: "Project Intern",
    org: "Ekeeda Private Ltd",
    date: "Feb 2022 - Jul 2022",
    duration: 6,
    certificateUrl: "https://example.com/datascience-certificate.pdf",
    description:
      "Led an 11-member team to improve marketing strategies, increasing course enrollments by 15%. Negotiated vendor partnerships, cutting costs by 20%. Cold-called 100+ prospects daily, maintaining a 20–30% conversion rate."
  }
];

const timeline = document.getElementById("timeline");

const directions = ["left", "right", "top", "bottom"];

experienceData.forEach((item, index) => {
  const entry = document.createElement('div');
  entry.classList.add('timeline-entry', index % 2 === 0 ? 'left' : 'right');

  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  entry.dataset.anim = randomDirection;

  const barWidth = Math.min(item.duration * 80, 240);

  entry.innerHTML = `
    <span class="date">${item.date}</span>
    <h4>${item.title}</h4>
    <div class="org">${item.org}</div>
    <div class="timeline-bar" style="width:${barWidth}px"></div>
    <p>${item.description}</p>
  `;

  // Expand on click
  entry.addEventListener('click', () => {
    entry.classList.toggle('active');
  });

  timeline.appendChild(entry);
});

// Scroll reveal animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = i * 200; // stagger by 200ms
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, delay);
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.timeline-entry').forEach(entry => {
  observer.observe(entry);
});




  
  