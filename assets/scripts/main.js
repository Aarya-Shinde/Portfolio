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


// logic for puzzle solving and scrambling of ***about me**** background


document.addEventListener("DOMContentLoaded", () => {
    const scene = document.getElementById('puzzleScene');
    const textTarget = document.getElementById('typewriterText');
    const text = "I merge code, creativity, and storytelling. My portfolio reflects fusion thinking through web dev, AI tools, and art platforms.";
    
    // Create 24 unique pieces
    for (let i = 0; i < 24; i++) {
        const piece = document.createElement('div');
        const size = 30 + Math.random() * 50; // Different sizes
        const shapeType = i % 3; // Cycle through 3 shapes
        
        piece.className = `puzzle-piece shape-${shapeType}`;
        piece.style.width = `${size}px`;
        piece.style.height = `${size}px`;
        scene.appendChild(piece);
    }

    const pieces = document.querySelectorAll('.puzzle-piece');

    function runFusionCycle() {
        // 1. Scatter (Explode)
        pieces.forEach((p) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            p.style.left = `${x}%`;
            p.style.top = `${y}%`;
            p.style.transform = `translateZ(${Math.random() * 600 - 300}px) rotate(${Math.random() * 720}deg) scale(0)`;
            p.style.opacity = "0";
        });

        textTarget.textContent = "";

        // 2. Solve into Diamond (after delay)
        setTimeout(() => {
            pieces.forEach((p, i) => {
                // Math to form a diamond grid
                const angle = (i / pieces.length) * Math.PI * 2;
                const radiusX = 35 + (i % 3) * 5; 
                const radiusY = 45 + (i % 3) * 5;
                
                // Positioning to form a diamond shape around center
                const posX = 50 + Math.cos(angle) * (i * 1.5);
                const posY = 50 + Math.sin(angle) * (i * 1.5);

                p.style.left = `${posX}%`;
                p.style.top = `${posY}%`;
                p.style.transform = `translate(-50%, -50%) rotate(${i * 15}deg) scale(1)`;
                p.style.opacity = "0.6";
            });
            
            typeWriter(0);
        }, 2000);
    }

    function typeWriter(i) {
        if (i < text.length) {
            textTarget.textContent += text.charAt(i);
            setTimeout(() => typeWriter(i + 1), 40);
        } else {
            setTimeout(runFusionCycle, 6000); // Wait 6s before restarting
        }
    }

    runFusionCycle();
});




// Logic  for the icons liquid water effect in *****Resume & Links section******


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.water-card');
    const droplet = document.getElementById('dropletSound');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            droplet.currentTime = 0;
            droplet.volume = 0.15;
            droplet.play();
        });

        // Add a small "trail" of liquid that follows the mouse 
        // to enhance the gooey melting effect between icons
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) - rect.width / 2;
            const y = (e.clientY - rect.top) - rect.height / 2;
            
            const liquid = card.querySelector('.liquid');
            liquid.style.transform = `translate(calc(-50% + ${x * 0.2}px), calc(-50% + ${y * 0.2}px))`;
        });
    });
});

