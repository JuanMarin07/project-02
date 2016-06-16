function greetings() {
  window.alert('Hi there, you want to log in !');
};

function validate () {
  var username, password

  username = document.getElementById('username').value
  password = document.getElementById('password').value

  if ((username === undefined || username === '')
                  || (password === undefined || password === '')) {
    document.getElementById('error').innerHTML = 'Username or Password are invalid !.'
      document.getElementById('error').style.color = "red"
  } else {
    document.getElementById('error').style.color = "green"
    document.getElementById('error').innerHTML = 'Username and Password are valid !.'
  };
};
$(document).ready(function(){
    $("table").mouseover(function(){
        $("table").css("background-color", "#FAAC58");
    });
    $("table").mouseleave(function(){
        $("table").css("background-color", "white");
    });
});
