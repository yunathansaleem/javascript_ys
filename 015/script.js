// Events in JS
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
});

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
// Example of a simple event listener for a button click
document.querySelector('.myClass').addEventListener('mouseover', function() {
    console.log('Mouse is over the element with class "myClass"');
});
// Example of a form submission event
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted!');
});
// Example of a keydown event
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});
// Example of a window resize event
window.addEventListener('resize', function() {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});
// Example of a mouse move event
document.addEventListener('mousemove', function(event) {
    console.log('Mouse moved to:', event.clientX, event.clientY);
});
// Example of a custom event
const myEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello, World!' } });
document.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event triggered:', event.detail.message);
});
document.dispatchEvent(myEvent);
// Example of a touch event for mobile devices
document.addEventListener('touchstart', function(event) {
    console.log('Touch started at:', event.touches[0].clientX, event.touches[0].clientY);
});
// Example of a drag and drop event
document.addEventListener('dragover', function(event) {
    event.preventDefault(); // Prevent default to allow drop
    console.log('Drag over at:', event.clientX, event.clientY);
});
document.addEventListener('drop', function(event) {
    event.preventDefault(); // Prevent default to allow drop
    console.log('Dropped at:', event.clientX, event.clientY);
});
// Example of a focus event
document.querySelector('input').addEventListener('focus', function() {
    console.log('Input field focused');
});
// Example of a blur event
document.querySelector('input').addEventListener('blur', function() {
    console.log('Input field lost focus');
});
// Example of a change event for input elements
document.querySelector('input[type="checkbox"]').addEventListener('change', function() {
    console.log('Checkbox changed:', this.checked);
});


// for more complex interactions, consider using libraries like jQuery or frameworks like React, Vue, or Angular that provide more robust event handling capabilities.
// Example of a scroll event
window.addEventListener('scroll', function() {
    console.log('Page scrolled to:', window.scrollY);
});