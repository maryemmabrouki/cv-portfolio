const toggle = document.getElementById('toggle');

const navbar = document.getElementById('navbar')
console.log(navbar)

toggle.addEventListener('click',()=>{
    navbar.classList.add('mohammedreda')
    
})
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}