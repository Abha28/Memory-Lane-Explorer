document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var userId = document.getElementById('userId').value.trim();
        var password = document.getElementById('password').value.trim();
        if (userId === '' || password === '') {
            alert('Please enter both User ID and Password.');
            return;
        }
        if (userId === 'patelroneek' && password === '9523846155') {
            alert('Login successful');
            window.location.href = "dashboard.html"; 
        } else {
            alert('Invalid User ID or Password.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var email = document.getElementById('email').value.trim();
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('confirmPassword').value.trim();
        window.location.href = "dashboard.html";
    });
});
