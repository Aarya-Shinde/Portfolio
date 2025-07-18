
  const container = document.querySelector('.projects-container');
  let scrollAmount = 0;
  let scrollStep = 1.2; // px per tick
  let scrollInterval;
  let isHovered = false;

  function autoScroll() {
    if (!isHovered) {
      container.scrollLeft += scrollStep;
      scrollAmount += scrollStep;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // reset to start
        scrollAmount = 0;
      }
    }
  }

  function startAutoScroll() {
    scrollInterval = setInterval(autoScroll, 15);
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  container.addEventListener('mouseenter', () => {
    isHovered = true;
  });

  container.addEventListener('mouseleave', () => {
    isHovered = false;
  });

  container.addEventListener('scroll', () => {
    isHovered = true;
    clearTimeout(container.scrollTimeout);
    container.scrollTimeout = setTimeout(() => {
      isHovered = false;
    }, 1000);
  });

  startAutoScroll();

