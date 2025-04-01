// Code for login page
// Created by Sameer Deshpande


document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('message');
  let show = document.getElementById("namelist");
  if (username === 'Sameer' && password === '1234') {
      // message.textContent = 'Login successful';
      // message.style.color = 'green';
      show.innerHTML = "<div class='success'>" + "Login Successfully" + "</div>";
      document.body.innerHTML = '<h1>Welcome to your page, ' + username + '!</h1>';
  } else {
      // message.textContent = 'Login unsuccessful';
      // message.style.color = 'red';
      show.innerHTML = "<div class='failed'>" + "Login Failed" + "</div>";
  }
document.getElementById('username').value = '';
document.getElementById('password').value = '';

});









