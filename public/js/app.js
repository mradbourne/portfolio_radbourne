function authPass(u,p) {
  self.location = "auth.html?" + u + p;
  return false;
}

function checkAuth() {
  if (location.search.indexOf("auth=failed") != -1) {
    $('#login-error').html('<strong>You shall not pass!</strong> Wrong username or password.');
    setLoginBox('open');
  }
}

function setLoginBox(state) {
  if (state == 'open') {
    $('.pre-login').hide();
    $('.login').fadeIn(250);
  } else {
    $('.login').hide()
    $('.pre-login').fadeIn(250);
  }
}

$(document).ready(function() {
  $('.login-btn').click(function() {
    setLoginBox('open');
    $('input[name=user]').focus();
  });
  $('.login-cancel-btn').click(function() {
    setLoginBox('closed');
  });
  if (window.location.pathname == '/work') checkAuth();
});