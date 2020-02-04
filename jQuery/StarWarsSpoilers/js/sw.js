//create reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
//append to web page
$('.spoiler').append($button);
// Unobtrusive JS
//make sure website remains functional without js

//Hide spoiler on page load
$('.spoiler span').hide();
//When the button is pressed show spoiler
$('.spoiler button').on('click', function () {
    $('.spoiler span').show();
    // and hide the button
    $('.spoiler button').hide();

});
