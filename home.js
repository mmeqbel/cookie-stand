'use strict'

import { locations } from './app.js'
renderHomePage(locations);
function renderHomePage(locations){

    for(var i=0;i<locations.length;i++){
        renderLocationCard(locations[i]);
    }
}
function renderLocationCard(store){

var root=document.getElementById("storesCards");
var div=document.createElement("div");
var storeName=document.createElement("h3");

var storeData=document.createElement("p");
storeData.innerHTML="Location : "+store.name+
"<br/>"+
"Total Cookies : "+store.getTotalCookies()+
"<br/>";
div.append(storeName);
div.append(storeData);
root.append(div);
}