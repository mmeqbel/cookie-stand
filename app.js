'use strict'
function Store(n, mHC, mxHC, cC) {  //contructor to create Store Object
    this.name = n;
    this.minHourlyCust = mHC;
    this.maxHourlyCust = mxHC;
    this.avgCookieCust = cC;
    this.cookiesPerHour = [];
    this.totalCookies;
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

//creating five Stores
var seattle = new Store("Seattle", 20, 70, 6.3);
var tokyo = new Store("Tokyo", 3, 24, 1.2);
var dubai = new Store("Dubi", 11, 38, 3.8);
var paris = new Store("Paris", 20, 38, 2.3);
var lima = new Store("Lima", 2, 16, 4.6);


//put the five stores together
var locations = [seattle, tokyo, dubai, paris, lima];




// set-up DOM for to be render
var root = document.getElementById("cookiesData");//get the root element
console.log(root);
var h2 = document.createElement("h2");//set headline
h2.textContent = 'Sales Information';
root.append(h2);// append headline to the root
var table = document.createElement("table");        //create the table
table.append(getFirstRow()); //create then append the first row



for (var i = 0; i < locations.length; i++) {    // loop through stores
    cookies(locations[i]);//compute cookies per hour for each store by use cookies function
    render(locations[i]);//render each store
}//end for

table.append(getLastRow(locations)); //create then append the last row
root.append(table);








function render(store) {
    var row = document.createElement("tr");     //create row for each store
    var cookiesPerHour = store.cookiesPerHour;    //get the cookies per hour array

    for (var i = 0; i < cookiesPerHour.length; i++) {   //loop through cookies per hour

        if (i == 0) {   //the first cell will hold the store name  
            var rowName = document.createElement("th");
            rowName.textContent = store.name;
            row.append(rowName);
        }//end if

        var data = document.createElement("td");        //create table data to hold the cookiesPerHour
        data.textContent = cookiesPerHour[i];
        row.append(data);

    }//end for

    var dailyTotal = document.createElement("td");     //the last cell will hold the totalCookies 
    dailyTotal.textContent = store.getTotalCookies();
    row.append(dailyTotal);
    table.append(row);//append row

}//end func

function getLastRow(locations) {
    var numberOfDataCell = locations[0].cookiesPerHour.length;

    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.textContent = "Hourly Total";
    tr.append(th);

    for (var i = 0; i < numberOfDataCell; i++) {
        var total = 0;
        var data = document.createElement("td");
        for (var j = 0; j < locations.length; j++) {
            total += locations[j].cookiesPerHour[i];
        }
        console.log(total);
        data.textContent = total;
        tr.append(data)
    }
    var emptyCell = document.createElement("td");
    emptyCell.textContent = "";
    tr.append(emptyCell);

    return tr;
}
/**
 * function getTable with  return  header on the sales table
 */

function getFirstRow() {
    var tableRow = document.createElement("tr");
    var emptyCell = document.createElement("th");
    emptyCell.textContent = "";
    tableRow.append(emptyCell);

    for (var i = 6; i <= 19; i++) {//loop through time
        var tableHeader = document.createElement("th");
        tableHeader.textContent = (getBase12Timing(i));
        tableRow.append(tableHeader);
    }
    //last cell for daily total (in each object)
    var lastHeader = document.createElement("th");
    lastHeader.textContent = "Daily Location Total";
    tableRow.append(lastHeader);
    return tableRow;
}
function getBase12Timing(i) {
    var sign = 'am';
    if (i >= 12) sign = 'pm';
    if (i > 12) return i - 12 + ":00" + sign;
    else return i + ":00" + sign;
}

/*
function cookies sotre the computed cookies per hor for each store and store them in the object
*/

function cookies(obj) {
    var cookiesPerHour = []
    for (var i = 6; i <= 19; i++) {
        var computedCookies =
            getComputedCookies(
                getRandomIntInclusive(obj.minHourlyCust, obj.maxHourlyCust),
                obj.avgCookieCust);
        cookiesPerHour[i - 6] = computedCookies;
    }//end for
    obj.setcookiesPerHour(cookiesPerHour);
}//end cookies

//function to compute cookies per hour
function getComputedCookies(hourlyCust, avgCookie) {
    return Math.round(hourlyCust * avgCookie);
}//end fun

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
module.exports = {locations};