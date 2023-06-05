const firstName = document.querySelector("#firstName");

firstName.addEventListener('blur', () => {
  const nombreValor = firstName.value;
  const regularName = /^[A-Za-z]+$/;

  if (!regularName.test(nombreValor)) {
    alert("Please enter a valid name, don't write a number");
  }
});


const lastName = document.querySelector('#lastName');
lastName.addEventListener('blur', () => {
    const lastNameValor = lastName.value;
    const regularName = /^[A-Za-z]+$/;
    if(!regularName.test(lastNameValor)){
        alert("Please enter a valid name, don't write a number")
    }
})

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

confirmPassword.addEventListener('blur', () => {
    const passwordValor = password.value;
    const confirmPasswordValor = confirmPassword.value;
    const passwordMatch = /^${passwordValor}$/ 
    if(!passwordMatch.test(confirmPasswordValor)){
        alert("the password value doesn't match with the Password")
    }
})