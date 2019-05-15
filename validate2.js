function ValidateForm() {
	var email=document.getElementById("email");
	var username=document.getElementById("username");

	removeMessage();

	if (email.value.length==0){
		email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Email can't be blank";
		valid=false;} else if(email.value.indexOf('@')<=0){
		email.className="wrong-input";
		email.nextElementSibling.innerHTML="  Invalid @ position";
		valid=false;
	}else{
		email.className="form-control";
		email.nextElementSibling.innerHTML="";
		valid=true;
	}
	if (valid==true){

	if (username.value.length==0){
		username.className="wrong-input";
		username.nextElementSibling.innerHTML="  Username can't be blank";
		valid=false;}else{
		username.className="form-control";
		username.nextElementSibling.innerHTML="";
		valid=true;
	}}

	return valid;
}
function removeMessage(){
	var errorinput=document.querySelectorAll(".wrong-input");
	[].forEach.call(errorinput, function(el){
		el.classList.remove("wrong-input");
	});
	var errorpara=document.querySelectorAll(".error");
	[].forEach.call(errorinput, function(el){
		el.innerHTML="";
	});
}
