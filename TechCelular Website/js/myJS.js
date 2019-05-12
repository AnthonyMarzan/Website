
function operateNav() {
	var x = document.getElementById("navBar");
	if (x.className === "top") {
		x.className += " responsive";
	} else {
		x.className = "top";
	}
				
}


function sendMessage(){
	if (confirm("Confirm to send message!")) {
		alert("Thank You, Message Has Been Sent!");
		window.location.href ="thanks.html";
	}
}


function toggleMe(a,b){
	var e=document.getElementById(a);
	if(!e)return true;
	if(e.style.display=="none"){
		e.style.display="block"
		document.getElementById(b).value= "Collapse";
	} else{
		e.style.display="none"
		document.getElementById(b).value= "Click Here For More Information";
	}
	return true;
}


