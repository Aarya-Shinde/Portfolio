// script to inject that data into the page with animation

// For Work Experience

document.addEventListener("DOMContentLoaded", () => {
    const timelineEl = document.querySelector(".timeline");
  
    const createItem = (item, isTraining = false) => {
      const div = document.createElement("div");
      div.className = "timeline-item opacity-0 translate-y-6 transition duration-700 ease-out";
  
      const title = isTraining ? item.course : item.title;
      const company = isTraining ? item.provider : item.company;
      const date = item.date;
      const description = item.description;
  
      div.innerHTML = `
        <div class="timeline-icon bg-gradient-to-tr from-orange-400 to-pink-500 shadow-lg animate-bounce">
          <i class="fas ${isTraining ? 'fa-graduation-cap' : 'fa-briefcase'} text-white"></i>
        </div>
        <div class="timeline-content bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-4 cursor-pointer">
          <h3 class="text-lg font-semibold">${title}</h3>
          <span class="text-sm text-gray-500">${company}</span>
          <div class="collapse-content">
            <p class="text-sm mt-2">${description}</p>
            <span class="block mt-2 text-xs text-gray-400">${date}</span>
          </div>
        </div>
      `;
  
      // Toggle collapse
      div.querySelector(".timeline-content").addEventListener("click", () => {
        div.querySelector(".collapse-content").classList.toggle("hidden");
      });
  
      return div;
    };
  
    const parseDate = (str) => {
      const parts = str.match(/\d{4}/g);
      return parts ? new Date(parseInt(parts[0]), 0, 1) : new Date();
    };
  
    const sortedExperience = timelineData.experience.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    const sortedTraining = timelineData.training.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  
    // Inject sorted experience
    sortedExperience.forEach((item, i) => {
      const el = createItem(item);
      timelineEl.appendChild(el);
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-6");
      }, 100 * i);
    });
  
    // Inject sorted training
    sortedTraining.forEach((item, i) => {
      const el = createItem(item, true);
      timelineEl.appendChild(el);
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-6");
      }, 400 + 100 * i);
    });
  });
  