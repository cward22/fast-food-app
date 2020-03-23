// Create an object named menu where we'll save the menu for the restaurant. For each property (Each property should be a string like "fries") and add a number as the value.
var menu = {
    "burgers": 100,
    "shakes": 150,
    "fries": 200
}

// Attach an event listener to the order button and listen for the click event.
let orderButton = document.getElementById("orderButton").addEventListener("click", () => {
    // Take the customer's order and save it to a variable named customerOrder.
    let customerOrder = document.getElementById("userInput").value;
    let order = customerOrder

    // Take the customerOrder variable, (which should be a string) and split it on the comma character and trim white space after each comma. 
    .split(",")
    .map(x => x.trim())
    // Log the customer's order to the console.
    console.log(customerOrder);
    console.log(order);

    // Loop through the entire order array (from 0 to the length of the array). In the loop split each item of this array on the colon character. Trim the leading and trailing whitespace again.

    for (var i = 0; i < order.length; i++) {
        order[i] = order[i].split(":").map(item => 
            item.trim());
            console.log(order[i]);
    }
        
    for (var key in menu) {

        if(customerOrder == key) {
        console.log("order can be fulfilled");
        } else {
        console.log("item not in stock");
        
        // if(order[1] < menu[1]) {
        // console.log("order can be fulfilled")
        // } else {
        // console.log("order cannot be fulfilled");
        // }
     }
    //     if(order[i] == menu[0]) {
    //     console.log([key] + " is on menu");
    //     } else {
    //         console.log("item not on menu");
    //     };
    // };
        // } else if (order[1] < menu[1]) {
   
    // for (var name in menu) {
    //     if(order[0] === menu[0]) {
    //     console.log([name] + " is on menu");
        // } else if (order[1] < menu[1]) {
        // console.log("still in stock");
        // } else {
        //     // document.getElementById("output2").innerHTML = "cannot currently fulfill order";
        // console.log("not in stock");
        }
    
// Make a string with the customer's order and repeat order back to customer.
document.getElementById("output").innerHTML = `Your order -  ${customerOrder} - is being prepared!`;

// Clear input field after each order submission.
document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("userInput").value = "";
    });

// Clear output message when next customer clicks inside input field.
document.getElementById("userInput").addEventListener("click", function() {
    document.getElementById("output").innerHTML = "";
    });

})

function sendRequest () {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", sendRequest);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            console.log(this.responseText)
        } else {
            console.log("Status Error");
        }
    };
    xhr.open("GET", "https://swapi.co/documentation#root");
    xhr.send();
}
