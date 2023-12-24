document.addEventListener("DOMContentLoaded", function(){
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e){
        e.preventDefault();

        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 50,
            left: 0,
            behavior: 'smooth'
        });
    } 
});