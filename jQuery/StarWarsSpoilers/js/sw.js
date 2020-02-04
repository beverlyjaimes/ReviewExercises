// //When the button is pressed show spoiler
// $('.spoiler button').click( function () {
//     //you can also add other methods ex: mouseleave
//     $('.spoiler span').show();
//     // and hide the button
//     $('.spoiler button').hide();
// //    add event propagation
//
// });

$('.spoiler').on('click' , 'button', function () {
//if user clicks on this button fire the function
});

//create reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
//append to web page
$('.spoiler').append($button);
// Unobtrusive JS
//make sure website remains functional without js

//Hide spoiler on page load
$('.spoiler span').hide();

