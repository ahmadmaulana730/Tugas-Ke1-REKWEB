function Login() {
 	var username=document.getElementById('Username').value;
 	var password=document.getElementById('Password').value;

	if (username=="admin" && password=="admin") {
		
		alert('Selamat Datang Admin');
		window.location.assign("admin.html");
	}
	else if (username=="" && password=="") {
		alert('Mohon Masukkan Username & Password Anda');
	}else {
		alert("Username / Password Anda Salah");
	}
};