// $(document).ready(() => {
//     let currentContent = 5;
//     let otherContent;

//     $('#gallery').show();
//     if($('#gallery').length === currentContent) {
//         otherContent.length().hide();
//     }

//     // $('#gallery').slice(0, 5).show();
//     // if($('#gallery:hiden').length != 0) {
//     //     $('.gallery__btn').show();
//     // }
//     // $('gallery__btn').on('click', (e) => {

//     //     e.preventDefault();
//     //     $('#gallery:hiden').slice(0, 5).slideDown();
//     //     if($('#gallery:hiden').length === 0) {
//     //         $('gallery__btn').fadeOut('clow');
//     //     }
//     // })


// });


$(document).ready(() => {
   
    const galleryItems = $('.g-block__image2');
    const galleryNextBlock = $('.g-block__image2').hide();
    const itemsToShow = 9;
    let visibleItems = itemsToShow;

    if(galleryItems === galleryNextBlock) {
        $('.gallery__block').css('')
    }

    $('.gallery__btn').on('click', function(e) {
        e.preventDefault();

        // Змінюємо видимість зображень при кожному натисканні на кнопку
        galleryItems.slice(visibleItems - itemsToShow, visibleItems).slideToggle();

        // Змінюємо значення visibleItems
        visibleItems += itemsToShow;

        // Перевіряємо, чи є ще зображення, які можна показати, та приховуємо кнопку, якщо їх більше немає
        if (visibleItems = galleryItems.length) {
            $('g-block__image2').hide('slow');
        }
    });
});