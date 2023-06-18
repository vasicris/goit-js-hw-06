const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {

  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '' || password === '') {
    alert('All fields must be filled in!');
  } else {
    const formData = {
      email: email,
      password: password
    };

    console.log(formData);
  }
});