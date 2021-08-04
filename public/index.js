
// Navbar code
let hamburger=document.querySelector('.hamburger');
        let navLinks=document.querySelector('.nav-links');
        hamburger.addEventListener('click',()=>{
            navLinks.classList.toggle('showNav')
        })