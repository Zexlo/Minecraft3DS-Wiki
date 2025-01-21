document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to the Minecraft 3DS Wiki!');
});

// Settings Modal Functionality
const settingsIcon = document.getElementById('settingsIcon');
const settingsModal = document.getElementById('settingsModal');
const closeSettingsButton = document.getElementById('closeSettings');

settingsIcon.addEventListener('click', () => {
  settingsModal.style.display = 'flex'; // Show settings modal
});

closeSettingsButton.addEventListener('click', () => {
  settingsModal.style.display = 'none'; // Hide settings modal
});

// Card Hover Effect (JavaScript)
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
