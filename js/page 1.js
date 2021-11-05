	var x=document.getElementById('util');
	var y=document.getElementById('admin');
	var z=document.getElementById('btn');
	function admin() {
		x.style.left = "-400px"
        y.style.left= "50px"
	 z.style.left = "125px"
	}
	function util() {
		x.style.left = "50px"
		y.style.left= "450px"
	 z.style.left = "0px"
	}
	function show(){
		var password = document.getElementById('pass');
		var confirm = document.getElementById('conf');
		var image = document.getElementById('eye');
		if (password.type==="password") {
			password.type= "text" ;
		 
			image.setAttribute('src','../image/eye.png');}
		else if (password.type==="text") {
			password.type="password" ;
			
			 image.setAttribute('src','../image/eye1.png');
		}
	}
