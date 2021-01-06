'use strict'
/**
 * *****************************************************************
 * 
 *        STORE CONSTRUCTORE  
 * 
 ******************************************************************/

function Store(n, mHC, mxHC, cC, address, hoursOpen,contactInfo, img) {  //contructor to create Store Object
    this.name = n;
    this.minHourlyCust = mHC;
    this.maxHourlyCust = mxHC;
    this.avgCookieCust = cC;
    this.cookiesPerHour = [];
    this.totalCookies;
    this.address = address;
    this.hoursOpen = hoursOpen;
    this.contactInfo=contactInfo;
    this.img = img;

}

Store.prototype.setcookiesPerHour = function (cookiesPerHour) {
    this.cookiesPerHour = cookiesPerHour;
}
Store.prototype.getTotalCookies = function () {
    var total = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
        total += this.cookiesPerHour[i];
    }
    return total;
}

/**
 * *****************************************************************
 * 
 *        DATA DECLARITION 
 * 
 ******************************************************************/

//creating five Stores
var seattle = new Store("Seattle", 20, 70, 6.3, "USA,Washington,Seattle", "10:00pm-4:00pm","seattle@gmail.com", "img/cutter.jpeg");
var tokyo = new Store("Tokyo", 3, 24, 1.2, "JAPAN", "7:00pm-10:00pm","tokyo@gmail.com", "img/family.jpg");
var dubai = new Store("Dubi", 11, 38, 3.8, "UAE,dubi", "8:00pm-2:00pm","dubi@gmail.com", "img/fish.jpg");
var paris = new Store("Paris", 20, 38, 2.3, "FRANCE,paris", "10:00pm-4:00pm","paris@gmail.com", "img/shirt.jpg");
var lima = new Store("Lima", 2, 16, 4.6, "PERU,lima", "8:00pm-5:00pm","lima@gmail.com", "img/chinook.jpg");


//put the five stores together
var locations = [seattle, tokyo, dubai, paris, lima];

/**
 * *****************************************************************
 * 
 *        EXECUATABLE 
 * 
 ******************************************************************/

render(locations);







/**
 * *****************************************************************
 * 
 *        FUNCTIONALITY 
 * 
 ******************************************************************/
//render each location data
function render(locations) {
    var root = document.getElementById("storesInfo");
    for (var i = 0; i < locations.length; i++) {
        var div=getAppendableDiv(locations[i]);
        root.append(div);
    }//end for
}//end render

function getAppendableDiv(store){
    var container=document.createElement("div");
    var firstChildDiv=document.createElement("div");
    var seconedChildDiv=document.createElement("div");
    var name=document.createElement("h2");
    name.innerText=store.name;
    var information=document.createElement("p");
    information.innerHTML=
    "<b>Adress : </b>"+"<span>"+store.address+"</span>"+"<br/>"+  //adress
    "<b>Hours Open : </b>"+"<span>"+store.hoursOpen+"</span>"+"<br/>"+    //hours open
    "<b>contact info : </b>"+"<span>"+store.contactInfo+"</span>"+"<br/>";   //contact info
    
    firstChildDiv.append(information);
    var img=document.createElement("img");
    img.src=store.img;
    seconedChildDiv.append(img);
    firstChildDiv.append(name);
    container.append(firstChildDiv);
    container.append(seconedChildDiv);

    return container;
}//end appendable div


