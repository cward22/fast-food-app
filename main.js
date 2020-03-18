var menu = {
    "burgers": 100,
    "shakes": 100,
    "fries": 100
    // "boneless buffalo wings": 300,
    // "veggie burger": 100,
    // "sweet potato fries": 200
}
   
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
    document.getElementById("userInput").value = '';
});