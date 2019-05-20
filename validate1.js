function ValidateForm() {
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	var confirm_password=document.getElementById("confirm_password");
	var age=document.getElementById("age");
	
	
	var letter=/^[a-z0-9]+$/;
	
	var f=0;
	if (name.value.length==0){
		name.className="wrong-input";
		name.nextElementSibling.innerHTML="  name can't be blank";
		}
		else if(f==1){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
		}
	else{
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		f=f+1;
	}
	if (email.value.length==0){
		email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Email can't be blank";
		}else if(email.value.indexOf('@',0)<=0){
		email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Invalid @ position";
		}else if(email.value.indexOf('.',0)<0){
			email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Invalid . position";
		}else if(emailvalid()==false){
			email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Enter valid E-mail id";
		}
		else if(f==2){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
	}else{
		email.className="form-control";
		email.nextElementSibling.innerHTML="";
		f=f+1;
	}
	
	if (username.value.length==0){
		username.className="wrong-input";
		username.nextElementSibling.innerHTML="  Username can't be blank";
		}else if((username.value.length<5) || (username.value.length>15)){
			username.className="wrong-input";
		username.nextElementSibling.innerHTML="  Username should be in range 5 - 15";
		}else if(username.value.match(" ")){
			username.className="wrong-input";
		username.nextElementSibling.innerHTML=" no blank spaces";
		}else if(!username.value.match(letter)){
			username.className="wrong-input";
		username.nextElementSibling.innerHTML=" username should be lowercase";
		}
		else if(f==3){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
		}else{
		username.className="form-control";
		username.nextElementSibling.innerHTML="";
		f=f+1;
	}

	
	if (password.value.length<6){
		password.className="wrong-input";
		password.nextElementSibling.innerHTML="  password can't be less than 6";
		}
		else if(f==4){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		 
	}else{
		password.className="form-control";
		password.nextElementSibling.innerHTML="";
		f=f+1;
	}
	

	
	if (password.value!=confirm_password.value){
		confirm_password.className="wrong-input";
		confirm_password.nextElementSibling.innerHTML="  password does not match";
		}
		else if(f==5){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
	}else{
		confirm_password.className="form-control";
		confirm_password.nextElementSibling.innerHTML="";
		f=f+1;
	}
	


	 
	if (age.value<18 || age.value>90){
		age.className="wrong-input";
		age.nextElementSibling.innerHTML="  Age should be in between 18-90";
		}
		else if(f==6){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
	 }else{
		age.className="form-control";
		age.nextElementSibling.innerHTML="";
		f=f+1;
	}


	if (gender.value == "gender"){
		gender.className="wrong-input";
		gender.nextElementSibling.innerHTML=" Select the Gender";
		}
		else if(f==7){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
	 }else{
		gender.className="form-control";
		gender.nextElementSibling.innerHTML="";
		f=f+1;
	}

	if (colour.value == "favourite_colour"){
		colour.className="wrong-input";
		colour.nextElementSibling.innerHTML=" Select your Favourite colour";
		}
		else if(f==8){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
	 }else{
		colour.className="form-control";
		colour.nextElementSibling.innerHTML="";
		f=f+1;
	}
	if (f==8){
		valid=true;
	}else{valid=false;}
	return valid;

}

function emailvalid(){
		var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
var b=emailfilter.test(email.value);
if(b==false)
{

		return false;

}
	}
