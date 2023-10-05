document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const thankYouMessage = document.getElementById('thank-you');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
     
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const rating = document.getElementById('rating').value;
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});
