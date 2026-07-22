// Trigger Confetti effect on Page Load
window.addEventListener('DOMContentLoaded', () => {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
});
