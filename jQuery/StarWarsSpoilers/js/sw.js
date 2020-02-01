//Hide spoiler on page load
$('.spoiler span').hide();
//When the button is pressed show spoiler
$('.spoiler button').click(function () {
    $('.spoiler span').show();
    // and hide the button
    $('.spoiler button').hide();
});
