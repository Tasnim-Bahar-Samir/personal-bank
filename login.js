document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    if(emailField.value === 'personalBank@samir.com' && passwordField.value === '123456'){
        window.location.href = 'transaction.html'
    }else{
        alert('invalid input!')
    }
});




