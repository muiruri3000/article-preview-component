const shareBtns = document.querySelectorAll('.shareBtn'); 
const shareIcons = document.querySelector('.icons--test');

shareBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Toggle the display of the icons using the 'visible' class
        shareIcons.classList.toggle('visible');
    });
});
