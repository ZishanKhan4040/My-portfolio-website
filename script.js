// Initialize AOS (Animate on Scroll) library
AOS.init({
    duration: 1000,
    once: true,
});

// Dynamic Project Filter
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else if (!project.classList.contains(category)) {
            project.style.display = 'none';
        } else {
            project.style.display = 'block';
        }
    });
}

// Dynamic Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to a server
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form response and show success message
    document.getElementById('form-response').innerHTML = `
        Thank you for your message, ${name}! 
        We'll get back to you at ${email} soon.
    `;
    document.getElementById('form-response').style.color = '#28a745'; // Green color for success
    
    // Optionally clear the form after submission
    document.getElementById('contact-form').reset();
});
