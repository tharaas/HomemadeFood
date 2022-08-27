Vue.component('Reservation',
{ 
    props:["id"],
    template: `<div :class="'animated fadeInRight component Reservation ' + id"> 
                <h1 v-if="after" class="animated bounceIn">We Have Received Your Request Successfully!</h1>        
                <span class="notifications first-noti animated shake">Please, Select A Date Before Selecting Time</span>
                <span class="notifications second-noti animated shake">Please, Select A Date Before Submitting Request</span>
                <span class="notifications third-noti animated shake">Please, Select Time Before Submitting Request</span>
                <span class="notifications last-noti animated shake">Please, Write Your Name Before Submitting Request</span>

                <div v-if="!afterSubmit" class="app"> 
                    <from v-on:submit.prevent>
                        <div class="input field col s6">
                            <input id="last_name" type="text" class="validate" v-model="customerName">
                            <label for="last_name" class="customerinfo">Name</label>
                        </div>
                        <div class="input field col s6">
                            <input id="phone" type="number" class="validate" v-model="customerNumber">
                            <label for="phone" class="customerinfo">Contant Number</label>
                        </div>
                        <div class="input field col s6">
                            <input id="people" type="number" class="validate" v-model="customerNumberOfPeople">
                            <label for="people" class="customerinfo">How many people on the table</label>
                        </div>
                        <input type="text" class="datepicker" placeholder="Pick A Date">
                        <div class="select-time" @click="checkDate">See Available Time</div>
                        <select class="browser-default time" v-show="dateSelected == 'selected'">
                            <option value="">Select Time</option>
                            <option value="time">09:00</option>
                            <option value="time">09:30</option>
                            <option value="time">10:00</option>
                            <option value="time">10:30</option>
                            <option value="time">11:30</option>
                            <option value="time">11:00</option>
                            <option value="time">12:00</option>
                            <option value="time">13:00</option>
                            <option value="time">14:00</option>
                            <option value="time">15:00</option>
                            <option value="time">15:30</option>
                            <option value="time">16:00</option>
                        </select>
                        <hr>
                            <a @click="post" class="waves-effect waves-light btn-large yellow"><i class="material-icons left Medium">event</i>Make Reservation</a>
                    </from>
                </div>
            </div>`,
    data(){
        return {
            afterSubmit: false,
            customerName: "",
            customerNumber: "",
            customerNumberOfPeople: "",
            dateSelected: 'Notselected',
            date: '',
            bookedTime: [],
            validationName : false,
            validationDate : false,
            validationTime : false
        }
    },
    methods:{
        checkDate(){
            this.date = document.getElementsByClassName('datepicker')[0].value;
            if(this.date){
                this.dateSelected = 'selected';
                this.$http.get('https://appointment-booking-web2022-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json').then(function(){
                    let savedData = Object.values(data.body); 
                    for(let x=0; x< savedData.length ;x++){
                        if(savedData[x].date == this.date){
                            this.bookedTime.push(parseInt(savedData[x].time));
                        }
                    }
                    console.log(this.bookedTime);
                });
            }
            else{
                this.notificatin('first-noti');
            }
        },
        post(){
            let time = document.getElementsByClassName('time')[0].value;
            this.checkDate();
            if(!this.date){
                this.notificatin('second-noti');
            }else{
                this.validationDate = true;
            }
            if(!time){
                this.notificatin('third-noti');
            }else{
                this.validationTime = true;
            }
            if(!this.customerName){
                this.notificatin('last-noti');
            }else{
                this.validationName = true;
            }
            if(this.validationDate == true & this.validationTime == true & this.validationName == true){
                this.$http.post('https://appointment-booking-web2022-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json',
                {
                    "customerName" : this.customerName,
                    "customerNumber" : this.customerNumber,
                    "customerNumberOfPeople" : this.customerNumberOfPeople,
                    "date" : this.date,
                    "time" : time,
                    "status" : "pending"
                }).then(function(data){
                    this.afterSubmit = true;
                });
            }
        },
        notificatin(element){
            document.getElementsByClassName(element)[0].style.display = "block";
            setTimeout(function(){
                document.getElementsByClassName(element)[0].style.display = "none";
            },5000)
        }
    }
});

Vue.directive('check',
{
    update(el,binding,vnode){
        let time = parseInt(el.innerHTML);
        let check = vnode.context.bookedTime.includes(time);
        if(check){
            el.disables = true;
            el.style.color = "yellow";
            el.innerHTML = el.innerHTML + "Not Available";
        }
        else{
            el.disables = false;
            el.style.color = "blue";
            el.style.fontSize = "1.2rem";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {minDate : new Date()});
});