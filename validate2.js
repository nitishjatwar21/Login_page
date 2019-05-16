function ValidateForm() {
	var email=document.getElementById("email");
	var username=document.getElementById("username");

	// removeMessage();
	var f=0;
	if (email.value.length==0){
		email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Email can't be blank";
		}else if(email.value.indexOf('@')<=0){
		email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Invalid @ position";
		}
		else if(f==1){
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
		}
		else if(f==2){
		name.className="form-control";
		name.nextElementSibling.innerHTML="";
		
		}else{
		username.className="form-control";
		username.nextElementSibling.innerHTML="";
		f=f+1;
	}

	if (f==2){
		valid=true;
	}else{valid=false;}
	return valid;
}
// function removeMessage(){
// 	var errorinput=document.querySelectorAll(".wrong-input");
// 	[].forEach.call(errorinput, function(el){
// 		el.classList.remove("wrong-input");
// 	});
// 	var errorpara=document.querySelectorAll(".error");
// 	[].forEach.call(errorinput, function(el){
// 		el.innerHTML="";
// 	});
// }

