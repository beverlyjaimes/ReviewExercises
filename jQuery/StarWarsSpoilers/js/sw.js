//Hide spoiler on page load
$('.spoiler span').hide();
//When the button is pressed show spoiler and hide the button
$('.spoiler button').click(function () {
    $('.spoiler span').show();
});