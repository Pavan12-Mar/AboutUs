// Function for typing effect with fade-in animation
function typeEffect(element, text, speed) {
    let i = 0;
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s ease-in-out';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.opacity = 1;
        }
    }
    setTimeout(type, 300); // Delay before typing starts
}

document.addEventListener('DOMContentLoaded', function() {
    const journeyPara = document.querySelector('.animate-typing');
    const text = journeyPara.getAttribute('data-text');

    window.addEventListener('scroll', function() {
        const position = journeyPara.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            if (!journeyPara.classList.contains('typed')) {
                journeyPara.classList.add('typed');
                typeEffect(journeyPara, text, 50); // 50ms per character
            }
        }
    });
});
