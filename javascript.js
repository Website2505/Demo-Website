burger = document.querySelector(".burger")
navlist = document.querySelector(".nav-list")
rightnav = document.querySelector(".right-nav")
navbar = document.querySelector(".nav-bar")
navbar.classList.toggle("h-class")
func = ()=>{
    navlist.classList.toggle("v-class-resp")
    navbar.classList.toggle("h-class")
    rightnav.classList.toggle("v-class-resp")
}
burger.addEventListener("click", func)