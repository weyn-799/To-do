// Get form and button elements
const form = document.querySelector('.form');
const saveBtn = form.querySelector('button[type="submit"]');
const resetBtn = form.querySelector('button[type="reset"]');
const inputs = form.querySelectorAll('input, select, textarea');

// Get task list and modal elements
const overlay = document.querySelector('.overlay');
const body = document.body;

// Simple form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const formData = new FormData(form);
  let isValid = true;
  
  // Check if required fields are filled
  inputs.forEach((input) => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '';
    }
  });
  
  if (isValid) {
    // Log form data (for demonstration)
    console.log('Form submitted successfully!');
    console.log('Form values:', Object.fromEntries(formData));
    
    // Clear form
    form.reset();
    
    // Show success message
    alert('Завдання додано успішно!');
  } else {
    alert('Будь ласка, заповніть всі обов.язкові поля!');
  }
});

// Reset button handler
resetBtn.addEventListener('click', () => {
  form.reset();
  inputs.forEach((input) => {
    input.style.borderColor = '';
  });
});

// Detail buttons handler
const detailButtons = document.querySelectorAll('.button.primary');
detailButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Toggle button color for visual feedback
    button.style.backgroundColor = button.style.backgroundColor === 'rgb(255, 165, 0)' ? '' : 'rgb(255, 165, 0)';
    console.log('Кнопка деталі натиснута!');
  });
});

// Navigation menu handler
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach((item) => {
  item.addEventListener('click', function() {
    // Remove active class from all items
    menuItems.forEach((i) => i.classList.remove('active'));
    // Add active class to clicked item
    this.classList.add('active');
  });
});

console.log('✓✓ JavaScript загружен і працює!');
