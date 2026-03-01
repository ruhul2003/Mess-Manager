const email = document.getElementById('input-email');
const password = document.getElementById('input-password');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', function() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue === '' || passwordValue === '') {
        alert('Please enter email and password');
        return;
    }
    else if(emailValue === 'ruhul941020@gmail.com' && passwordValue === '123456') {
        window.location.href = 'home.html';
    }
    else {
        alert('Invalid email or password');
    }

   
});