// Code for login page
// Created by Sameer Deshpande


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    let show = document.getElementById("namelist");
    var message = document.getElementById('message');
    if (username === 'Sameer' && password === '1234') {
        message.textContent = 'Login successful';
        message.style.color = 'green';
        alert('Login successful');
        document.body.innerHTML = '<h1>Welcome to your page, ' + username + '!</h1>';
    } else {
        message.textContent = 'Login unsuccessful';
        message.style.color = 'red';
        alert('Login unsuccessful');
    }
   

});
