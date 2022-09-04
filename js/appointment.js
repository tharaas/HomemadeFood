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

var finaldata;
var resevation = [];
firebase.firestore().collection("appointments").onSnapshot(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			resevation.push(doc.data())
		});
		finaldata = resevation;
	});

function format(d) {
	return `<table>
	<tr>
	  <td> Client:</td>
	  <td> ${d.userName}</td>
	</tr>
	<tr>
		<td> Phone:</d>
		<td> ${d.phone}</td>
	</tr>
    <tr>
      <td>Date:</td>
      <td>${d.dateR}</td>
    </tr>
    <tr>
      <td> Time:</td>
      <td>${d.timeR}</td>
    </tr>
    <tr>
      <td> custumer Number:</td>
      <td>${d.custumerNumber}</td>
    </tr>
    <tr>
    <td>Id:</td>
    <td>${d.id}</td>
	</tr>
    <tr>
 </table>`;
}

$(document).ready(function () {
	setTimeout(function () {
		var table = $('#adminRes').DataTable({
			"data": finaldata,
			select: "single",
			"columns": [
				{
					"className": 'details-control',
					"ordersable": false,
					"data": null,
					"defaultContent": '',
					"render": function () { return '<i style="hover:pointer" class=" fa fa-plus-sqaure"aria-hidden="true"></i>'; },
					width: "15px"
				},
				{ "data": "id" },
				{ "data": "dateR" },
				{ "data": "userName" },
                { "data": "phone" },
                { "data": "timeR" },
                { "data": "custumerNumber" }
			]
		});
		//add event listener for opening and closing 
		$('#formRes tbody').on('click', 'td.details-control', function () {
			var tr = $(this).closest('tr');
			var tdi = tr.find("i.fa")
			var row = table.row(tr);

			if (row.child.isShown()) {
				//close row
				row.child.hide();
				tr.removeClass('shown');
				tdi.first().removeClass('fa-minus-square');
				tdi.first().addClass('fa-plus-sqaure');
			}
			else {
				//open row
				row.child(format(row.data())).show();
				tr.addClass('shown');
				tdi.first().removeClass(' fa-plus-sqaure');
				tdi.first().addClass(' fa-minus-square');
			}
		});
	}, 4000)
});