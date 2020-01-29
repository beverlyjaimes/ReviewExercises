// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// //give user time to read message
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp();

//the same can be done with less code by stringing

//  $('#flashMessage')
//      .hide()
//      .slideDown(1000)
//      .delay(3000)
//      .slideUp();
//
//   const title = "My First Blog Post";
//   const content = "<strong>This is my first post!</strong>";
//
//   $('#blogTitlePreview').text(title);
//   // $('#blogContentPreview').text(content);
//
//   //you can also save text but variables are cleaner
// $('#blogContentPreview').html(content);

$('#previewButton').click(function () {
const title = $('#blogTitleInput').val();
 console.log(title);
 const content = $('#blogContentInput').val();
 console.log(content);

 $('#blogTitlePreview').text(title);
 $('#blogContentPreview').html(content);

 //message will display when button is clicked
 $('#flashMessage')
     .hide()
     .slideDown(1000)
     .delay(3000)
     .slideUp();
//
});

// $('.label').hover(function () {
//  alert('Include post here!')
// });




