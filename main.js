// Create an object named menu where we'll save the menu for the restaurant. For each property (Each property should be a string like "fries") and add a number as the value.

var menu = {
    "burgers": 100,
    "shakes": 150,
    "fries": 200
    // "boneless buffalo wings": 300,
    // "veggie burger": 100,
    // "sweet potato fries": 200
}

// take the customer's order and save it to a variable named customerOrder

// attach an event listener to the order button and listen for the click event
document.getElementById("orderButton").addEventListener("click", function() {
    // take the customer's order and save it to a variable named customerOrder
    var customerOrder = document.getElementById("userInput").value;
    // make a string with the customer's order and repeat order back to customer
    document.getElementById("output").innerHTML = `Your order -  ${customerOrder} - is being prepared!`;
     // log the customer's order to the console
    console.log(customerOrder);
})

// clear input field after each order submission
document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("userInput").value = "";
});

// clear output message when next customer clicks inside input field
document.getElementById("userInput").addEventListener("click", function() {
    document.getElementById("output").innerHTML = "";
});

// Take the customerOrder variable, (which should be a string) and split it on the comma character. 

// var customerOrder = document.getElementById("userInput").value;
// customerOrder.split(",");


