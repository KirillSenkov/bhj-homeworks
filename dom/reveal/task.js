const reveals = document.querySelectorAll('.reveal');

function checkVisibility() {
    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();