// Create an object named menu where we'll save the menu for the restaurant. For each property (Each property should be a string like "fries") and add a number as the value.

var menu = {
    "burgers": 100,
    "shakes": 150,
    "fries": 200
    // "boneless buffalo wings": 300,
    // "veggie burger": 100,
    // "sweet potato fries": 200
}

// Attach an event listener to the order button and listen for the click event.
document.getElementById("orderButton").addEventListener("click", function() {
    // Take the customer's order and save it to a variable named customerOrder.
    var customerOrder = document.getElementById("userInput").value;
    // Make a string with the customer's order and repeat order back to customer.
    document.getElementById("output").innerHTML = `Your order -  ${customerOrder} - is being prepared!`;
     // Log the customer's order to the console.
    console.log(customerOrder);
})

// Clear input field after each order submission.
document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("userInput").value = "";
});

// Clear output message when next customer clicks inside input field.
document.getElementById("userInput").addEventListener("click", function() {
    document.getElementById("output").innerHTML = "";
});

// Take the customerOrder variable, (which should be a string) and split it on the comma character.
var customerOrder = "   burgers: 3, fries: 2, shakes: 4   ";
var order = customerOrder.split(",").map(function(item) {
// Trim extra white space after comma.
    console.log (item.trim());
});


// Loop through the entire order array (from 0 to the length of the array)