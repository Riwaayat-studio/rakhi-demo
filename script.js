// Trigger Confetti effect on Page Load
window.addEventListener('DOMContentLoaded', () => {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});

// Button Trigger
function triggerSurprise() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 }
        });
    }
}
 
