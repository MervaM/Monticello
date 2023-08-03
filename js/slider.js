let section = document.getElementsByClassName('slider__block');
for(let i = 0; i < section.length; i++) {
    let div = document.createElement('div');
    div.className = 'slider__info';

    let h1 = document.createElement('h1');
    h1.className = 'slider__info-title';
    h1.innerText = 'simple & modern';

    let p = document.createElement('p');
    p.className = 'slider__info-descr';
    p.innerText = 'we make the world beatiful everyday';

    div.appendChild(h1);
    div.appendChild(p);

    section[i].appendChild(div);
    console.log(div);
};

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false, 

        autoplay: true,
        autoplaySpeed: 7000,
        speed: 3500,
        slidesToShow: 1,
        infinite: true,
        swipe: true,
        // fade: true,

        responsive: [
            {
                breakpoint: 998,
                settings: {
                    dots: false,
                    arrows: true
                }
            },
            {breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplaySpeed: 3000,
                    speed: 800,
                }  
            },
        ]
    });
  });