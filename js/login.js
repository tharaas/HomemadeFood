//web app's Firebase configuration
var firebaseConfig = { 
apiKey: "AIzaSyBKgot7qsfSlmr5dnAtrdlOlDzqFD5dk4s",
authDomain: "homemade-food-9c1aa.firebaseapp.com", 
databaseURL: "https://homemade-food-9c1aa.firebaseio.com",
projectId: "homemade-food-9c1aa",
storageBucket: "homemade-food-9c1aa.appspot.com",
messagingSenderId: "745393512684",
appId: "1:745393512684:web:6f2226b126e044e9e585c9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore= firebase.firestore();
	  
var x = document.getElementById("userName");
var p = document.getElementById("userPassword");

	document.getElementById("formLogin").addEventListener("submit",(ee)=>{
		ee.preventDefault();
		console.log(x.value);
		console.log(p.value);
		firebase.auth().signInWithEmailAndPassword(x.value,p.value)
		.then(()=>{
			swal.fire({
				position: 'center',
				type: 'success',
				title:'Welcome',
				text:`Access Granted`
			});
			x.value='';
			p.value='';
				setTimeout(()=>{
					loadPage();
				},1000);
		}
		)
		.catch((error)=>{
			swal.fire({
				position:'center',
				icon:'error',
				title:'Error',
				text:`Access Denied`,
			});
			x.value=' ';
			p.value=' ';
		});

		function loadPage(){
			window.location.href="./admin.html";
		}
	});