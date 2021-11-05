var x=document.getElementById('util');
	var y=document.getElementById('admin');
	var z=document.getElementById('btn');
	function admin() {
		x.style.left = "-700px"
        y.style.left= "50px"
	 z.style.left = "125px"
	}
	function util() {
		x.style.left = "50px"
		y.style.left= "750px"
	 z.style.left = "0px"
	}
	function show(){
		var password = document.getElementById('pass');
		var confirm = document.getElementById('conf');
		var image = document.getElementById('eye');
		if (password.type==="password" , confirm.type=== "password") {
			password.type= "text" ;
			confirm.type= "text"; 
			image.setAttribute('src','../image/eye.png');}
		else if (password.type==="text" , confirm.type=== "text") {
			password.type="password" ;
			 confirm.type="password";
			 image.setAttribute('src','../image/eye1.png');
		}
	}
