// Get the button element
const button = document.getElementById('power');

// Variable to store the timeout
let timeout;

// Function to handle button press
function handleButtonPress() {
    // Clear any existing timeout
    clearTimeout(timeout);

    // Set a new timeout for 3 seconds
    timeout = setTimeout(() => {
        // Redirect to homepage.html
        window.location.href = 'bootup.html';
    }, 1000);
}

// Add event listener for button press
button.addEventListener('mousedown', handleButtonPress);

// Add event listener for button release
button.addEventListener('mouseup', () => {
    // Clear the timeout if the button is released before 1 second
    clearTimeout(timeout);
});

