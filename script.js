// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (you can replace this with an actual API call)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for reaching out! I will get back to you soon.');
    document.getElementById('contact-form').reset();
  });