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

function clean() {
  document.getElementById('last_name').innerHTML = '';
  document.getElementById('phone').innerHTML = '';
  document.getElementById('people').innerHTML = '';
  document.getElementById('dateR').innerHTML = '';
  document.getElementById('timeR').innerHTML = '';
  localStorage.clear();
}

$(document).ready(() => {
  $("#app").modal();
  var userName = document.getElementById('last_name');
  var phone = document.getElementById('phone');
  var custumerNumber = document.getElementById('people');
  var dateR = document.getElementById('dateR');
  var timeR = document.getElementById('timeR');
  var id = document.getElementById('last_name');

  $("#formRes").submit(function (e) {
    e.preventDefault();
    firebase.firestore().collection("appointments").add({
      id: userName.value,
      userName: userName.value,
      phone: phone.value,
      custumerNumber: custumerNumber.value,
      dateR: dateR.value,
      timeR: timeR.value
    })
      .then(() => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: ' successfully!',
          text: `Your resevation number is: ${id}`,
          showConfirmButton: true,
          timer: 50000
        });
        $("#app").modal('close');
        clean();
      })
  });
});