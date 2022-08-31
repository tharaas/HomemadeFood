//web app's Firebase configuration
var firebaseConfig = { 
	apiKey: "AIzaSyA5x7DAxNIARKUa9LyYzQW6qFVl-TGDF6M",
	authDomain: "homemade-food-2022.firebaseapp.com",
	databaseURL: "https://homemade-food-2022.firebaseio.com",
	projectId: "homemade-food-2022",
	storageBucket: "homemade-food-2022.appspot.com",
	messagingSenderId: "1039380704685",
	appId: "1:1039380704685:web:5b3c8d7a7316cb56224524",
	measurementId: "G-87W7BZ1G2L"
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