// Get references to the HTML elements
const numberElement = document.querySelector('#number');
const incrementButton = document.querySelector('.incrementButton');
const decrementButton = document.querySelector('.decrementButton');

// Initialize the number
var currentNumber = document.querySelector('#number').innerText;
let hasUpvoted = false;
let hasDownvoted = false;

// Function to update the number element and increment the number
function incrementNumber() {
    
    if (!hasUpvoted && !hasDownvoted){currentNumber++;
    numberElement.innerText = currentNumber;
    hasUpvoted = true;
    incrementButton.disabled = true;
    decrementButton.disabled = true;
    incrementButton.innerText = "👍 Upvoted";
}
}

// Add a click event listener to the button
incrementButton.addEventListener('click', incrementNumber);


function decrementNumber() {
    if (!hasUpvoted && !hasDownvoted)
    {currentNumber--;
        numberElement.innerText = currentNumber;
        hasDownvoted = true;
        incrementButton.disabled = true;
        decrementButton.disabled = true;
        incrementButton.innerText = "👎 Downvoted";
    }
}

// Add a click event listener to the button
decrementButton.addEventListener('click', decrementNumber);
