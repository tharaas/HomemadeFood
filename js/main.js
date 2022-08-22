//global
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n')
if(localStorage.getItem('positions')){
    var positions = [JSON.parse(localStorage.getItem('positions'))]
} else{
    var positions = [];
}

//DIV
var homemade_foodDIV = document.getElementById('homemade_foodDIV');
var pastriesDIV = document.getElementById('pastriesDIV');
var dessertDIV = document.getElementById('dessertDIV'); 

//IMFORMATION
var Homemade_food = [
    {id:1,cart:false,img:'img/IMG-3444.jpeg',quanity:5,total:0,name:'Kabsa',price:120},
    {id:2,cart:false,img:'img/IMG-3442.jpeg',quanity:5,total:0,name:'Wrak arish',price:80},
    {id:3,cart:false,img:'img/IMG-3440.jpeg',quanity:5,total:0,name:'Ares',price:60},
    {id:4,cart:false,img:'img/IMG-3443.jpeg',quanity:5,total:0,name:'Ebrk',price:80},
    {id:5,cart:false,img:'img/IMG-3455.jpeg',quanity:5,total:0,name:'Mahashi',price:140},
    {id:6,cart:false,img:'img/IMG-3487.jpeg',quanity:5,total:0,name:'Mansaf',price:160},
    {id:7,cart:false,img:'img/IMG-3458.jpeg',quanity:5,total:0,name:'Fata',price:40},
    {id:8,cart:false,img:'img/IMG-3475.jpeg',quanity:5,total:0,name:'Tabole',price:80}
]
var pastries = [
    {id:9,cart:false,img:'img/IMG-3457.jpeg',quanity:5,total:0,name:'Asaba Jbn',price:50},
    {id:10,cart:false,img:'img/IMG-3465.jpeg',quanity:5,total:0,name:'Sfiha',price:70},
    {id:11,cart:false,img:'img/IMG-3466.jpeg',quanity:5,total:0,name:'Pizza',price:60},
    {id:12,cart:false,img:'img/IMG-3468.jpeg',quanity:5,total:0,name:'Kba & snabes',price:100}
]
var dessert = [
    {id:13,cart:false,img:'img/IMG-3461.jpeg',quanity:5,total:0,name:'Kataif',price:60},
    {id:14,cart:false,img:'img/IMG-3448.jpeg',quanity:5,total:0,name:'Hresa',price:50},
    {id:15,cart:false,img:'img/IMG-3464.jpeg',quanity:5,total:0,name:'Kadorem',price:40},
    {id:16,cart:false,img:'img/IMG-3450.jpeg',quanity:5,total:0,name:'Meski',price:30}
]



function HTMLPhoneProduct(con){
    let btn= `btnHomemade_food${con}`;
    if(Homemade_food[con-1].cart){
    return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${Homemade_food[con-1].img}">
                    <a id="${btn}alert" onclick="alertCart()" calss="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i> 
                    </a>
                 </div>
                 <div class="card-content">
                    <i style="color:orange;" class="fa fa-star"  ></i> 
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <span class="card-title">${Homemade_food[con-1].name}</span>
                    <p>Price: ₪${Homemade_food[con-1].price}.00</p>
                  </div>
            </div>
        </div>
    `
    }else{
        return ` 
            <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${Homemade_food[con-1].img}">

                    <a id="${btn}" onclick="cart('${Homemade_food[con-1].id}','${Homemade_food[con-1].cart}',
					'${Homemade_food[con-1].img}','${Homemade_food[con-1].quanity}','${Homemade_food[con-1].total}',
					'${Homemade_food[con-1].name}','${Homemade_food[con-1].price}','${btn}')"
       
                    class="btn-floating halfway-fab waves-effect lighten-2" style="background-color: rgb(13, 235, 168);">
					<i class="material-icons">add_shopping_cart</i></a>
                    <a id="${btn}alert" style="display:none" onclick="alertCart()" 
                    class="btn-floating halfway-fab waves-effect waves-light green">
					<i class="material-icons">shopping_cart</i></a>
                </div>    
                <div class="card-content">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <span class="card-title">${Homemade_food[con-1].name}</span>
                <p>Price: ₪${Homemade_food[con-1].price}.00</p>
             </div>
            </div>
         </div>   
        `
    }
}

function HTMLpastriesProduct(con){
    let btn= `btnpastriess${con}`;
    if(pastries[con-1].cart){
    return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${pastries[con-1].img}">
                    <a id"{btn}alert" onclick="alertCart()" calss="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i> 
                    </a>
                 </div>
                 <div class="card-content">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <span class="card-title">${pastries[con-1].name}</span>
                    <p>Price: ₪${pastries[con-1].price}.00</p>
                 </div>
            </div>
        </div>
    `
    }else{
        return ` 
            <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${pastries[con-1].img}">

                    <a id="${btn}" onclick="cart('${pastries[con-1].id}','${pastries[con-1].cart}',
					'${pastries[con-1].img}','${pastries[con-1].quanity}','${pastries[con-1].total}',
					'${pastries[con-1].name}',
                    '${pastries[con-1].price}','${btn}')"
                    class="btn-floating halfway-fab waves-effect lighten-2" style="background-color: rgb(13, 235, 168);">
					<i class="material-icons">add_shopping_cart</i></a>
                    <a id="${btn}alert" style="display:none" onclick="alertCart()" 
                    class="btn-floating halfway-fab waves-effect waves-light green">
					<i class="material-icons">shopping_cart</i></a>
                </div>    
                <div class="card-content">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <span class="card-title">${pastries[con-1].name}</span>
                <p>Price: ₪${pastries[con-1].price}.00</p>
             </div>
            </div>
         </div>   
        `
    }
}

function HTMLdessertProduct(con){
    let btn= `btncase${con}`;
    if(pastries[con-1].cart){
    return `
        <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${pastries[con-1].img}">
                    <a id="${btn}alert" onclick="alertCart()" calss="btn-floating halfway-fab waves-effect waves-light green">
                    <i class="material-icons">shopping_cart</i> 
                    </a>
                 </div>
                 <div class="card-content">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <span class="card-title">${pastries[con-1].name}</span>
                    <p>Price: ₪${pastries[con-1].price}.00</p>
                 </div>
            </div>
        </div>
    `
    }else{
        return ` 
            <div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
            <div class="card">
                <div class="card-image">
                    <img src="${dessert[con-1].img}">

                    <a id="${btn}" onclick="cart('${dessert[con-1].id}','${dessert[con-1].cart}',
					'${dessert[con-1].img}','${dessert[con-1].quanity}','${dessert[con-1].total}',
					'${dessert[con-1].name}',
                    '${dessert[con-1].price}','${btn}')"
                    class="btn-floating halfway-fab waves-effect lighten-2" style="background-color: rgb(13, 235, 168);">
					<i class="material-icons">add_shopping_cart</i></a>
                    <a id="${btn}alert" style="display:none" onclick="alertCart()" 
                    class="btn-floating halfway-fab waves-effect waves-light green">
					<i class="material-icons">shopping_cart</i></a>
                </div>    
                <div class="card-content">
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <i style="color:orange;" class="fa fa-star"  ></i>
                <span class="card-title">${dessert[con-1].name}</span>
                <p>Price: ₪${dessert[con-1].price}.00</p>
             </div>
            </div>
         </div>   
        `
    }
}

//ANIMATION
function animation(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:2000
});

Toast.fire({
    icon:'success',
    title: 'Added to shopping cart'
})
}

//Alert cart
function alertCart(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:2000
});

Toast.fire({
    icon:'info',
    title: 'Product already added to shopping cart'
})
}

//CART FUNCTIONS
function cart(id,cart,img,quanity,total,name,price,btncart){
    var item={
        id:id,cart:true,img:img,quanity:quanity,total:total,name:name,price:price
    }
    positions.push(id);
    localStorage.setItem("positions",JSON.stringify(positions));
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if(storage == null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }else{
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    document.getElementById(btncart+'alert').style.display="block";
    animation();
}

//RENDER
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$(document).ready(function(){
    $('.modal').modal();
});

function render(){ 
    new WOW().init();
    if(localStorage.getItem('positions')){
        var localProductsCart = JSON.parse(localStorage.getItem('positions'));
    } else {
        var localProductsCart = [];
        localStorage.setItem('positions',JSON.stringify(localProductsCart));
        var localProductsCart =JSON.parse(localStorage.getItem('positions'));
    }

    for(let i=0; i<localProductsCart.length; i++){
        //Homemade_food
       for(let i2=0;i2<Homemade_food.length; i2++){
           if(localProductsCart[i] == Homemade_food[i2].id){
               Homemade_food[i2].cart =true;
           }else{ }
       } 
       //pastries
       for(let i2=0;i2<pastries.length; i2++){
          if(localProductsCart[i] == pastries[i2].id){
              pastries[i2].cart =true;
         }else{ }
        } 
        //dessert
        for(let i2=0;i2<dessert.length; i2++){
            if(localProductsCart[i] == dessert[i2].id){
                dessert[i2].cart =true;
            }else{ }
        } 
    }
    for(let i=1; i<=8; i++){
        homemade_foodDIV.innerHTML+=`${HTMLPhoneProduct(i)}`;
    }
    for(let i=1; i<=4; i++){
        pastriesDIV.innerHTML +=`${HTMLpastriesProduct(i)}`;
        dessertDIV.innerHTML +=`${HTMLdessertProduct(i)}`;
    }
    if(localStorage.getItem("cart")==null){
    }else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
}