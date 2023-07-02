document.addEventListener('DOMContentLoaded', () => {
  let aboutLink = document.querySelector('.about-link');
  let servicesBtn = document.querySelector('.solutions__btn');

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      rect.top <= windowHeight
    );
  }

  function animateElementsOnScroll() {
    let animatedElements = document.getElementsByClassName('animated-element');
    let animatedOffers = document.getElementsByClassName('solutions__item');
    let animatedLogo = document.getElementsByClassName('projects__logo');
    let visibleLogos = Array.from(animatedLogo).filter(isElementInViewport);

    for (var i = 0; i < animatedElements.length; i++) {
      var element = animatedElements[i];

      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    }

    for (var i = 0; i < animatedOffers.length; i++) {
      var element = animatedOffers[i];
    
      setTimeout(function(el) {
        return function() {
          if (isElementInViewport(el)) {
            el.classList.add('ok');
          }
        };
      }(element), i * 300); 
    }

    let randomIndexes = Array.from({ length: visibleLogos.length }, (_, index) => index);
    randomIndexes.sort(() => Math.random() - 0.5); 

    randomIndexes.forEach((index, i) => {
      const element = visibleLogos[index];
      const delay = i * 200;
      setTimeout(() => {
        element.classList.add('show');
      }, delay);
    });
  }

  window.addEventListener('scroll', animateElementsOnScroll);



  // ссылки из хедера - поведение
  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    let targetElement = document.getElementById('about');
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });

  // переход на страницу услуги
  servicesBtn.addEventListener('click', function () {
    window.location.href = "services.html";
  });
})