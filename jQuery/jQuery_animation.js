// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// //give user time to read message
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp();

//the same can be done with less code by stringing

 $('#flashMessage')
     .hide()
     .slideDown(1000)
     .delay(3000)
     .slideUp();

  const title = "My First Blog Post";
  const content = "This is my first post!";

  $('#blogTitlePreview').text(title);