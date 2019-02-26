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
	alert("Hello");
const username = document.getElementById('username');
const pass = document.getElementById('password');
const sign = document.getElementById('buton');

buton.addEventListener('click',e => {
	const us = username.value;
	const pas = pass.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(us,pas);
	//if(promise){
	//window.open("home.html", "_self");
	//}
	console.log("jello");
	promise.catch(e => console.log(e.message));

});
});