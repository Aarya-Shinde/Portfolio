document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById('heroCards');
  const skills = ['Python', 'SQL', 'PHP', 'JS', 'Java', 'Git', 'Flask', 'API', 'PowerBI', 'CSS'];

  const createCard = (index) => {
    const card = document.createElement('div');
    card.className = 'floating-card';
    card.innerText = skills[index % skills.length];
    
    // Set text color to Black or Red like a deck of cards
    card.style.color = Math.random() > 0.5 ? '#000000' : '#d40000';
    
    card.style.left = `${Math.random() * 100}%`;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * 15;
    
    card.style.animationDuration = `${duration}s`;
    card.style.animationDelay = `-${delay}s`;
    
    const scale = 0.5 + Math.random() * 0.7;
    card.style.transform = `scale(${scale})`;
    
    cardContainer.appendChild(card);
  };

  for (let i = 0; i < 15; i++) {
    createCard(i);
  }
});