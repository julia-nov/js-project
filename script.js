'use strict';

let div = document.createElement('div'),
	log = document.createElement('div'),
	reg = document.createElement('div'),
	loginForm = document.createElement('form'),
	// button = document. createElement('button') ;
	registerForm = document.createElement('form');

div.className = 'signin-form';
log.className = 'login';
log.innerHTML = 'Login';

reg.className = 'register';
reg.innerHTML = 'Register';


loginForm.className = 'login-form';


loginForm.innerHTML = "<label>Username</label><br/>" + 
                 "<input type='text' placeholder='type username'/><br/>" + 
                 "<label>Password</label><br/>" + 
                 "<input type='password' placeholder='*************'/><br/>" + 
                 "<input type='submit' value='Login'/>" + 
                 "<p><a href='#'>Forgot password ?</a></p><br/>";



div.appendChild(log);
div.appendChild(reg);
div.appendChild(loginForm);
div.appendChild(registerForm);
document.body.appendChild(div);