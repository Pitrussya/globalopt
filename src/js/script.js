window.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carusel__item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        caruselWrapper = document.querySelector('.carusel__wrapper'),
        caruselField = document.querySelector('.carusel__inner'),
        width = window.getComputedStyle(caruselWrapper).width;
        
    let offset = 0;
    let slideIndex = 1;


    caruselField.style.width = 100 * slides.length +'%';

    slides.forEach(slide => {
        slide.style.width = width;
      });

    next.addEventListener('click', () => {
       if (offset == +width.slice(0, width.length -2) * (slides.length - 1)) {
           offset = 0;
       } else {
           offset += +width.slice(0, width.length -2);
       }
        caruselField.style.transform = `translateX(-${offset}px`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
          } else {
            slideIndex++;
          }
    });

    prev.addEventListener('click', () => {
        if (offset == 0 ) {
            offset = +width.slice(0, width.length -2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length -2);
        }
         caruselField.style.transform = `translateX(-${offset}px`;

         if (slideIndex == 1) {
            slideIndex = slides.length;
          } else {
            slideIndex--;
          }
     });

    // showSlide(slideIndex);
    // function showSlide(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = '';
    // }    

    // function slidePluse(n) {
    //     showSlide(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     slidePluse(-1);
    // });


});