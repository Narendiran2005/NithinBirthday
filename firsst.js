function showSurprise() {
    // Show hidden message
    document.getElementById("hidden-message").classList.toggle("hidden");

    // Play music
    let music = document.getElementById("birthday-song");
    music.play();

    // Start confetti effect
    startConfetti();
}

// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
const colors = ["#ff4e50", "#fc636b", "#fad0c4", "#ffd700", "#ff69b4"];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            speed: Math.random() * 3 + 1,
            size: Math.random() * 8 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
        });
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((p, index) => {
        p.y += p.speed;
        if (p.y > canvas.height) confettiParticles[index].y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
    requestAnimationFrame(animateConfetti);
}

function startConfetti() {
    createConfetti();
    animateConfetti();
}
