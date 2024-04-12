const apiUrl = 'http://localhost:8888/api/register';
const userData = {
  email: 'test@gmail.com',
  password: 'secret'
};

// Make the HTTP POST request to the registration endpoint
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
.then(response => {
  if (response.ok) {
    console.log('Registration successful');
  } else if (response.status === 400) {
    console.error('Email already taken or invalid email/password format');
  } else {
    console.error('Registration failed:', response.statusText);
  }
})
.catch(error => {
  console.error('There was a problem with the registration:', error);
});
