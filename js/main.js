// Example: Show an alert on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to the Minecraft 3DS Wiki!');
});

document.querySelectorAll('details').forEach((detail) => {
  const contents = detail.querySelectorAll(':not(summary)'); // Select all child elements of the details tag exclude summary tag

  detail.addEventListener('toggle', () => {
    contents.forEach((content) => {
      if (detail.open) {
        // Reset styles for animation
        content.style.opacity = '0';
        content.style.transform = 'translateY(-25px)';
        
        // Trigger reflow to apply styles before the animation starts
        content.getBoundingClientRect();
        
        // Apply animation styles
        content.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      } else {
        // Apply closing animation
        content.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-25px)';

        // Reset styles after the animation completes
        setTimeout(() => {
          content.style.transition = '';
          content.style.opacity = '';
          content.style.transform = ''; 
        }, 410);
      }
    });
  });
});


// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});