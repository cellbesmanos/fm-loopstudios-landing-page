

function initializeMobileMenu() {
  const burgerBtn = document.querySelector(".nav-main__burger");

  burgerBtn.addEventListener("click", () => {
    const linkList = burgerBtn.nextElementSibling;
  
    burgerBtn.classList.toggle("active");
  })
}

function initializeStickyNav() {
  const navMain = document.querySelector(".nav-main");
  const featuredContent = document.querySelector(".featured");
  
  const opt = {
    threshold : "0.6"
  };
  
  // Intersection Oberver API
  const featuredContentObverver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
  
      if(!entry.isIntersecting && entry.boundingClientRect.top > 200) {
        navMain.classList.remove("scrolling");
  
        return
      }
      navMain.classList.add("scrolling");
    })
  }, opt);
  
  featuredContentObverver.observe(featuredContent);
}



document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu();
  initializeStickyNav();
})
