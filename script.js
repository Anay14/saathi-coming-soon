document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = form.querySelector('input[type=email]').value;
        
        // Placeholder for what you would do with the email address
        console.log('Email submitted: ' + email);
        
        // Here you would typically send the email to your server or a serverless function
        // For now, we'll just clear the form and display a message
        form.reset();
        alert('Thank you for your interest! We will notify you when we launch.');
    });
});

