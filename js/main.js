document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to the Minecraft 3DS Wiki!');
});

// Settings Modal Functionality
const settingsIcon = document.getElementById('settingsIcon');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsButton = document.getElementById('closeSettings');
const themeToggle = document.getElementById('themeToggle');

settingsIcon.addEventListener('click', () => {
  settingsModal.style.display = 'flex'; // Show settings modal
});

closeSettingsButton.addEventListener('click', () => {
  settingsModal.style.display = 'none'; // Hide settings modal
});

themeToggle.addEventListener('change', function() {
  document.body.classList.toggle('light-mode', this.checked);
});

// Existing code for card interaction and other features remains unchanged
document.querySelectorAll('details').forEach((detail) => {
  const contents = detail.querySelectorAll(':not(summary)');
  
  detail.addEventListener('toggle', () => {
    contents.forEach((content) => {
      if (detail.open) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(-25px)';
        content.getBoundingClientRect();
        content.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      } else {
        content.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-25px)';
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
    card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseleave', () => {
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
