const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',e=>{
   e.preventDefault();
   validateInputs();
});


const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username,'Username is required');
    }
    else
    {
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue))
    {
        setError(email,'Email is not valid');
    }
    else
    {
        setSuccess(email);
    }
    
    if(passwordValue === ''){
        setError(password,'Password is required');
    }else if (passwordValue.length<8){
        setError(password,'Minimum 8 character required');
    }else
    {
        setSuccess(password);
    }
     
    if(password2Value === ''){
        setError(password2,'Password is required');
    }else if (password2Value !== passwordValue){
        setError(password2,'Password do not match');
    }else
    {
        setSuccess(password2);
    }



}

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
}
