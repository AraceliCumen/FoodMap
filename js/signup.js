$(document).ready(function() {
  var $email = $('#inputEmail'); 
  var $password = $('#inputPassword');
  var $check = $('#check');

  // asociando eventos a los elementos
  $email.on('input', function(event) {
    // console.log(event.target.value);
    console.log($(this).val());
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATERNEMAIL.test($(this).val()));
  });

  $password.on('input', function(event) {
    if ($(this).val().length >= 6) {
      console.log('cumple');
    } else {
      console.log('no cumple');  
    }
  });

  $check.on('check'){

  }
});