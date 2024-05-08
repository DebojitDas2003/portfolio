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
        // Redirect to bootup.html
        window.location.href = 'prebootup.html';
    }, 1000);
}

// Add event listener for mouse button press
button.addEventListener('mousedown', handleButtonPress);

// Add event listener for mouse button release
button.addEventListener('mouseup', () => {
    // Clear the timeout if the button is released before 1 second
    clearTimeout(timeout);
});

// Add event listener for touch start
button.addEventListener('touchstart', handleButtonPress);

// Add event listener for touch end
button.addEventListener('touchend', () => {
    // Clear the timeout if the touch is ended before 1 second
    clearTimeout(timeout);
});
