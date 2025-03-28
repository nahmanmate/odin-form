document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    let message = `
        <h1>Account Created Successfully!</h1>
        <p>Thank you, ${urlParams.get('firstName')} ${urlParams.get('lastName')}, for signing up.</p>
        <p>We've sent a confirmation email to ${urlParams.get('email')}.</p>
    `;
    
    document.querySelector('.signUpThanks').innerHTML = message;
});