const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 

  const formData = {};
  const elements = loginForm.elements;

 
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type === 'text' || element.type === 'email' || element.type === 'password') {
      const value = element.value.trim(); 
      if (!value) {
        alert('All form fields must be filled in');
        return;
      }
      formData[element.name] = value;
    }
  }


  console.log(formData);
  loginForm.reset();
});


