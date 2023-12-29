const form = document.getElementById('user-info-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'userinfo.html';
});