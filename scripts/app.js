//Navegação Scroll através do menu header principal
const headerNavbar = document.querySelectorAll('.navbar a[href^="#"]');
const backToMenu = document.querySelector('.backToMenu');

//Pequena função para retornar ao topo quando a "altura" do site for maior que 1000px no eixo Y
backToMenu.addEventListener('click', () => {
    if(window.scrollY >= 1000) {
        smoothScrollTo(0, 0, 2000);
    }

});

//Navegação Scroll através do navbar
headerNavbar.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const element = event.target;
        const hashElement = element.getAttribute("href");
        const to = document.querySelector(hashElement).offsetTop;

        smoothScrollTo(0, to, 2000);
    });
})

//Navegação Scroll através do menu lateral
const menuNavbar = document.querySelectorAll('.newNavbar a[href^="#"]');

menuNavbar.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const element = event.target;
        const hashElement = element.getAttribute("href");
        const toSection = document.querySelector(hashElement).offsetTop;

        smoothScrollTo(0, toSection, 1000);
    });
})

//Biblioteca para fazer animçação do Scroll
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 144); // 144 fps
  };