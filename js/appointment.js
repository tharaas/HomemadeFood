Vue.component('admin',
{
    template: `<div>
                <table class="pending">
                    <thead>
                        <tr>
                            <th>Update</th>
                            <th>Status</th>
                            <th>Dates</th>
                            <th>Timing</th>
                            <th>Names</th>
                            <th>Contact Numbers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="booking in bookings" v-show="booking.status == 'pending'">
                            <td>
                                <a href="javascript:;">
                                    <i @click="update" :data-key=booking.unique :id=booking.status class="material-icons">autorenew</i>
                                </a>
                            </td>  
                            <td>{{ booking.status }}</td>
                            <td>{{ booking.date }}</td>
                            <td>{{ booking.time }}</td>
                            <td>{{ booking.customerName }}</td>
                            <td>{{ booking.customerNumber }}</td>
                        </tr>
                    </tbody>
                </table>
                <br><hr class="hr"><br>
                <table class="approved">
                    <thead>
                        <tr>
                            <th>Update</th>
                            <th>Status</th>
                            <th>Dates</th>
                            <th>Timing</th>
                            <th>Names</th>
                            <th>Contact Numbers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="booking in bookings" v-show="booking.status == 'approved'">
                            <td>
                                <a href="javascript:;">
                                    <i @click="update" :data-key=booking.unique :id=booking.status class="material-icons">autorenew</i>
                                </a>
                            </td>  
                            <td>{{ booking.status }}</td>
                            <td>{{ booking.date }}</td>
                            <td>{{ booking.time }}</td>
                            <td>{{ booking.customerName }}</td>
                            <td>{{ booking.customerNumber }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
    data(){
        return{
            bookings : [],
            statusUpdate : ""
        }
    },
    methods :{ 
        update(event){
            let key = event.srcElement.dataset.key;
            let status = event.srcElement.id;
            if(status == 'pending'){
                this.statusUpdate = 'approved';
            }else{
                this.statusUpdate = 'pending';
            }
            let reload = () => {this.fetcher();}
            firebase.database().ref('appointments').child(key).update(
                {
                    status: this.statusUpdate
                },function(error){
                    if(!error){
                        reload();
                    }
                }
            );
        },
        fetcher(){ //firebase
            this.$http.get('https://appointment-booking-web2022-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json').then(function(){
                return data.json();
            }).then(function(data){
                let req = [];
                for(let key in data){
                    data[key].unique = key;
                    req.push(data[key]);
                }
                this.booking = req;
            });
        }
    },
    created(){
        this.fetcher();
    }
});