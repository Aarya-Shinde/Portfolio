// js for hero falling card background 

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


// Stack animation of projects

// script identifies which bricks are "above" your target and 
// animates them flying out of the top of the bucket



document.querySelectorAll('.brick').forEach((brick) => {
    brick.addEventListener('mouseenter', function() {
        const allBricks = Array.from(document.querySelectorAll('.brick'));
        const currentIndex = allBricks.indexOf(this);

        this.classList.add('focused');

        // LIFO Logic: Everything ABOVE (lower index in our TOP-down array) pops out
        allBricks.forEach((b, i) => {
            if (i < currentIndex) {
                // Stagger the pop-out animation for smoothness
                setTimeout(() => {
                    b.classList.add('popped-out');
                }, i * 100);
            }
        });
    });

    brick.addEventListener('mouseleave', function() {
        document.querySelectorAll('.brick').forEach(b => {
            b.classList.remove('popped-out', 'focused');
        });
    });
});

