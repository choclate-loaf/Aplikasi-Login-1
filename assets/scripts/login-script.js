/** @module Login-Script */
/**
* Membuat variabel LoginFormElement untuk tampilan Form. 
* constant {HTMLElement}
*/ 
const LoginFormElement = document.querySelector('Loginform');
 

/**
* Membuat variabel inputEmailElemetn untuk tampilan input email.
* constant {HTMLElement}
*/
const LoginEmailmElement = document.querySelector('LoginEmail');


/**
* Membuat variabel inputPasswordElemetn untuk tampilan input password.
* constant {HTMLElement}
*/
const LoginPasswordmElement = document.querySelector('LoginPassword');


/**
* Membuat variavel expectedEmail untuk menyimpan informasi email sementara.
* constant {string}
*/
const exceptedEmail = 'admin@dicoding.com';


/**
* Membuat variavel expectedPassword untuk menyimpan informasi password sementara.
* constant {string}
*/
const exceptedPassword = 'superpassword';


/* Comment : Menambah aksi tekan pada botton. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/**
* membuat variabel email untuk menyimpan nilai email yang didapatkan saat bottom ditekan. 
* constant {string}
*/
conts email = inputEmailElemant.value;

/**
* membuat variabel email untuk menyimpan nilai password yang didapatkan saat bottom ditekan. 
* constant {string}
*/
conts password = inputPasswordElemant.value;


 /* comment : memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. 
 if (email == expectedEmail && Password == expectedPassword) { 

 /* Comment : jika sesuai maka program akan berpindah ke halaman home. */
 goToHome();

}else {

  /* Comment : namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */ 
  showPopUp ();


}
});


