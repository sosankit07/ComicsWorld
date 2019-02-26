(function () { 
  const config = {
    apiKey: "AIzaSyBuaFE9KiR340k-RRVv9hBgn9p8Q3ZGAg8",
    authDomain: "comic-c38d6.firebaseapp.com",
    databaseURL: "https://comic-c38d6.firebaseio.com",
    projectId: "comic-c38d6",
    storageBucket: "comic-c38d6.appspot.com",
    messagingSenderId: "47483974677"
  };
    firebase.initializeApp(config);


		const fname = document.forms["Form"]["Fname"];              
	    const lname = document.forms["Form"]["Lname"];
		const phone = document.forms["Form"]["Phone"];
		const email = document.forms["Form"]["Email"];    
		const username = document.forms["Form"]["Username"];
		const password = document.forms["Form"]["Password"];	
const sign = document.getElementById("buton").value;

buton.addEventListener('click',e => {
	alert("Hello");
	const us = username.value;
	const pas = pass.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(email,password);
	if(promise){
	//window.open("home.html", "_self");
	}
	promise.catch(e => console.log(e.message));

});
});