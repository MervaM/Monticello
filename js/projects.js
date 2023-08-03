let firstArticle = document.getElementsByClassName('projects__block-card card card-bg1');
for(let i = 0; i < firstArticle.length; i++) {
    let div = document.createElement('div');
    div.className = 'card__info';

    let cardSuptitle = document.createElement('p');
    cardSuptitle.className = 'card__suptitle';
    cardSuptitle.innerText = 'one world';

    let cardTitle = document.createElement('h3');
    cardTitle.className = 'card__title';
    cardTitle.innerText = 'dwelling';

    let cardDescr = document.createElement('p');
    cardDescr.className = 'card__descr';
    cardDescr.innerText = 'Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.';
    
    let cardMoreText = document.createElement('p');
    cardMoreText.className = 'card__descr card__descrOne';
    cardMoreText.innerText = 'Successful businesses have many things in common, today we’ll look at the big ‘R’ of recognition and how a digital advertising network may help.';


    let cardBtn = document.createElement('button');
    cardBtn.className = 'card__btn btn btn__one';
    cardBtn.innerText = 'more details';

    let cardLocation = document.createElement('p');
    cardLocation.className = 'card__location';
    cardLocation.innerText = 'New York City, United States - 1776 feet';



    div.appendChild(cardSuptitle);
    div.appendChild(cardTitle);
    div.appendChild(cardDescr);
    div.appendChild(cardMoreText);
    div.appendChild(cardBtn);
    div.appendChild(cardLocation);


    firstArticle[i].appendChild(div);
    console.log(div);
}


let secondArticle = document.getElementsByClassName('projects__block-card projects__block-card_reverse card card-bg2')
for(let i = 0; i < secondArticle.length; i++) {
    let div = document.createElement('div');
    div.className = 'card__info';

    let cardSuptitle = document.createElement('p');
    cardSuptitle.className = 'card__suptitle';
    cardSuptitle.innerText = 'international';

    let cardTitle = document.createElement('h3');
    cardTitle.className = 'card__title';
    cardTitle.innerText = 'details';

    let cardDescr = document.createElement('p');
    cardDescr.className = 'card__descr';
    cardDescr.innerText = 'Successful businesses have many things in common, today we’ll look at the big ‘R’ of recognition and how a digital advertising network may help.';

    let cardMoreText = document.createElement('p');
    cardMoreText.className = 'card__descr card__descrTwo';
    cardMoreText.innerText = 'Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.';

    let cardBtn = document.createElement('button');
    cardBtn.className = 'card__btn btn btn__two';
    cardBtn.innerText = 'more details';
    
    let cardLocation = document.createElement('p');
    cardLocation.className = 'card__location';
    cardLocation.innerText = 'Hong Kong - 1588 feet';



    div.appendChild(cardSuptitle);
    div.appendChild(cardTitle);
    div.appendChild(cardDescr);
    div.appendChild(cardMoreText);
    div.appendChild(cardBtn);
    div.appendChild(cardLocation);


    secondArticle[i].appendChild(div);
    console.log(div);
}

$(document).ready(() => {
    $('.card__descrTwo').hide();
    $('.btn__two').click( () => {
        if($('.card__descrTwo').is(':visible')) {
            $('.card__descrTwo').hide('slow');
        } else {
            $('.card__descrTwo').show('slow');
        }
    });
});

$(document).ready(() => {
    $('.card__descrOne').hide();
    $('.btn__one').click( () => {
        if($('.card__descrOne').is(':visible')) {
            $('.card__descrOne').hide('slow');  
        } else {
            $('.card__descrOne').show('slow');  
        }
    });
});


// let clickCount = 0;
// $('.btn__one').click(() => {
//     console.log(clickCount);
//     if(clickCount % 2 === 0) {
//         $('p.card__descr').add('slow', () => {
//             $('<p>Successful businesses have many things in common, today we’ll look at the big ‘R’ of recognition and how a digital advertising network may help.</p>')
//                 .appendTo('p.card__descr')
//                 .toggleClass('card__descr-1')
//         });
//     } else {
        
//         // $('p.card__descr-2').remove();
//         $('p.card__descr-1').fadeOut(500, function(){ 
//             $(this).remove();
//         })

//     }
//     clickCount++
// });

