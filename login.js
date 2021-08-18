document.getElementById('login-submit').addEventListener('click', function(){
  //using email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
   //using password
 const passwordfield = document.getElementById('user-password');
 const passwordfiled = passwordfield.value;
// check email and password 
 if (userEmail == 'tituroy4g@gmail.com' &&  passwordfiled== 'titu') {
    window.location.href = 'bangking.html'
 } 
})

