// ================================
// Part 1: Button Click Event
// ================================
const clickBtn = document.getElementById('clickMeBtn');
const clickMsg = document.getElementById('clickMessage');

clickBtn.addEventListener('click', () => {
  clickMsg.textContent = "You clicked the button! 🎉";
});

// ================================
// Part 2: Light/Dark Mode Toggle
// ================================
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ================================
// Part 2: Counter Feature
// ================================
let count = 0;
const countDisplay = document.getElementById('count');

document.getElementById('increase').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById('decrease').addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});

// ================================
// Part 3: Form Validation
// ================================
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let messages = [];

  // Name validation
  if (name === "") {
    messages.push("Name cannot be empty.");
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messages.push("Please enter a valid email.");
  }

  // Password validation
  if (password.length < 6) {
    messages.push("Password must be at least 6 characters.");
  }

  // Show feedback
  if (messages.length > 0) {
    feedback.style.color = 'red';
    feedback.innerHTML = messages.join('<br>');
  } else {
    feedback.style.color = 'green';
    feedback.textContent = "Form submitted successfully! ✅";
    form.reset();
  }
});
