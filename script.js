// Toggle between light and dark mode
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter feature
let count = 0;
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  document.getElementById('counter').textContent = count;
});

// Toggle FAQ answer
document.querySelector('.faq-question').addEventListener('click', () => {
  document.querySelector('.faq-answer').classList.toggle('hidden');
});

// Form validation logic
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('formMessage');

  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errors = [];

  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (!emailRegex.test(email)) errors.push("Please enter a valid email.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length > 0) {
    messageDiv.innerHTML = `<p class="error">${errors.join('<br>')}</p>`;
  } else {
    messageDiv.innerHTML = `<p class="success">Form submitted successfully!</p>`;
    // Reset form (optional)
    document.getElementById('contactForm').reset();
  }
});
