document.addEventListener('DOMContentLoaded', () => {
    let animatedTitle = document.getElementsByClassName('services__title');
    let animatedNumber = document.getElementsByClassName('services__number');
    let animatedString = document.getElementsByClassName('services__string');
    let animatedSubtitle = document.getElementsByClassName('services__text-subtitle');
    let animatedIcon = document.getElementsByClassName('services__icon');
    let animatedFrame = document.getElementsByClassName('services__frame');
    let animatedText = document.getElementsByClassName('services__text');
    let animatedList = document.querySelector('.services__list');





    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
          rect.top <= windowHeight
        );
    }
      
    animatedTitle[0].classList.add('show');
    animatedTitle[1].classList.add('show');
    animatedNumber[0].classList.add('show');
    animatedString[0].classList.add('show');
    animatedIcon[0].classList.add('show');
    animatedIcon[1].classList.add('show');
    animatedFrame[0].classList.add('slide');
    animatedText[0].classList.add('slide-again');



    function animateElementsOnScroll() {
      
        for (var i = 1; i < animatedTitle.length; i++) {
            var element = animatedTitle[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        }

        for (var i = 1; i < animatedNumber.length; i++) {
            var element = animatedNumber[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        }

        for (var i = 1; i < animatedString.length; i++) {
            var element = animatedString[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        }

        for (var i = 1; i < animatedSubtitle.length; i++) {
            var element = animatedSubtitle[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        }

        for (var i = 1; i < animatedIcon.length; i++) {
            var element = animatedIcon[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        }

        for (var i = 1; i < animatedFrame.length; i++) {
            var element = animatedFrame[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('slide');
            }
        }

        for (var i = 1; i < animatedText.length; i++) {
            var element = animatedText[i];
      
            if (isElementInViewport(element)) {
                element.classList.add('slide-again');
            }
        }

        var element = animatedList;
      
        if (isElementInViewport(element)) {
            element.classList.add('slide-again');
        }
        
    }
      
    window.addEventListener('scroll', animateElementsOnScroll);
  
    
})