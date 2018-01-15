$('input[type="password"]').on('focus', function () {
    $('*').addClass('password');
  }).on('focusout', function () {
    $('*').removeClass('password');
  });;