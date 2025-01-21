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

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    // Apply hover animation styles to the entire card
    card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
    // Reset styles when the mouse leaves the card
    card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
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
