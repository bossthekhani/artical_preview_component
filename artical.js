function toggleShareOptions() {
    const shareOptions = document.querySelector('.share-options');
    // Toggle the display property
    shareOptions.style.display = shareOptions.style.display === 'flex' ? 'none' : 'flex';
}

// Disable Inspect Element
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (e) {
    const disabledKeys = [123, 73, 74, 85, 67]; // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
    if (disabledKeys.includes(e.keyCode) && (e.ctrlKey || e.shiftKey)) {
        e.preventDefault();
    }
});

// ToolTip for share-icon
document.addEventListener('DOMContentLoaded', function () {
    const tooltipElements = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltipElements.forEach(function (el) {
        new bootstrap.Tooltip(el); // Assumes you're using Bootstrap 5
    });
});