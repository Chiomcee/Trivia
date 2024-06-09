// js/scripts.js

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Add form validation and submission logic here
    // For now, we simulate a successful login
    if (email && password) {
        alert('Login successful!');
        // Redirect to game selection page
        window.location.href = 'pages/game_selection_form.html';
    } else {
        alert('Please fill in both fields.');
    }
}

function handleStartPlaying() {
    // Open the login dropdown by simulating a click on the login button
    document.querySelector('.dropbtn').click();
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);

    const startPlayingBtn = document.getElementById('startPlayingBtn');
    startPlayingBtn.addEventListener('click', handleStartPlaying);
});
