// Wait for 1 second
setTimeout(() => {
    // Change the linked CSS to model.css
    const linkElement = document.querySelector('link[rel="stylesheet"]');
    linkElement.href = "model.css";
}, 2000);


timeout = setTimeout(() => {
    // Redirect to bootup.html
    window.location.href = 'bootup.html';
}, 4000);
