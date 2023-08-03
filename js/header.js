'use strict';

let nav = document.getElementsByClassName('header__nav')[0];
let ul = document.createElement('ul');
ul.className ='nav__list';

const listItems =['about us', 'projects', 'news', 'contact'];

listItems.forEach(function(elem) {
    let li = document.createElement('li');
    li.className ='nav__item';

    const a = document.createElement('a');

    a.innerHTML = elem;
    a.className = 'nav__link ';

    if (elem === 'about us') {
        a.href = '#about';
    } else if (elem === 'projects') {
        a.href = '#projects';        
    } else if (elem === 'news') {
        a.href = '#news';
    } else if (elem === 'contact') {
        a.href = '#contact';
    }
  
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);

$(document).ready(() => {
    $('.nav__link').first().addClass('active');
    $('.nav__link').on('click', function() {
        $('.nav__link').removeClass('active');
        $(this).addClass('active');
    });
});

const elem = $('body > .header');
const scrolled = () => {
   const threshold = $(document).scrollTop() > 50;
   elem.toggleClass('scrolled', threshold);
   };
   
$(window).on({ scroll: scrolled });

