// //    add event propagation
$('.spoiler').on('click' , 'button', function (event) {
//if user clicks on this button fire the function
//    .target shows specific button that was clicked
    console.log(event.target);
  $(event.target).prev().show();
//    event/evt/e says hide this specific button that was clicked
    $(event.target).hide();
});

//create reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
//append to web page
$('.spoiler').append($button);
// Unobtrusive JS
//make sure website remains functional without js

//Hide spoiler on page load
$('.spoiler span').hide();

