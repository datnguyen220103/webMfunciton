
var tabMobile = document.querySelector(".tab-mobile") 
var menuNav = document.querySelector(".nav-link")
var body = document.querySelector("body")

tabMobile.addEventListener("click",()=>{
    addMenu()
})
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      body.classList.remove("nav-link-mobile")
    }
  });
function addMenu(){
    if (body.classList.contains("nav-link-mobile")) {
        body.classList.remove("nav-link-mobile")
    } else {
        body.classList.add("nav-link-mobile")
    }
}


var backToTop = document.querySelector('.back-top')
function showBackToTop(){
    var scrollPosition = window.scrollY
    var triggerPosition = 200;
    if (scrollPosition >= triggerPosition) {
        backToTop.style.opacity = "1"
    } else {
        backToTop.style.opacity = "0"
    }
}
window.addEventListener('scroll',showBackToTop);

backToTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
})