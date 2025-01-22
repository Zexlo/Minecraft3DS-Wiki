document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to the Minecraft 3DS Wiki!');

  // Function to get theme preference from localStorage
  const getThemePreference = () => {
    return localStorage.getItem('theme') === 'light' ? true : false;
  };

  // Function to set theme preference in localStorage
  const setThemePreference = (isLight) => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.body.classList.toggle('dark-mode', !isLight); // Add dark mode class
  };

  // Function to get background image preference from localStorage
  const getBackgroundPreference = () => {
    return localStorage.getItem('bgImage') === 'true' ? true : false;
  };

  // Function to set background image preference in localStorage
  const setBackgroundPreference = (useImage) => {
    localStorage.setItem('bgImage', useImage ? 'true' : 'false');
  };

  // Function to get background blur preference from localStorage
  const getBlurPreference = () => {
    return localStorage.getItem('blur') === 'true' ? true : false;
  };

  // Function to set background blur preference in localStorage
  const setBlurPreference = (useBlur) => {
    localStorage.setItem('blur', useBlur ? 'true' : 'false');
  };

  // Apply theme and background settings
  const applySettings = () => {
    const themeToggle = document.getElementById('themeToggle');
    const bgImageToggle = document.getElementById('bgImageToggle');
    const blurToggle = document.getElementById('blurToggle');
    const settingsModal = document.getElementById('settingsModal');

    document.body.classList.toggle('light-mode', themeToggle.checked);
    document.body.classList.toggle('no-bg', !bgImageToggle.checked);
    settingsModal.classList.toggle('blur', blurToggle.checked);
  };

  // Settings Modal Functionality
  const settingsIcon = document.getElementById('settingsIcon');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsButton = document.getElementById('closeSettings');
  const themeToggle = document.getElementById('themeToggle');
  const bgImageToggle = document.getElementById('bgImageToggle');
  const blurToggle = document.getElementById('blurToggle');

  // Load the user's preferences
  themeToggle.checked = getThemePreference();
  bgImageToggle.checked = getBackgroundPreference();
  blurToggle.checked = getBlurPreference();
  applySettings();

  settingsIcon.addEventListener('click', () => {
    settingsModal.style.display = 'flex'; // Show settings modal
  });

  closeSettingsButton.addEventListener('click', () => {
    settingsModal.style.display = 'none'; // Hide settings modal
  });

  themeToggle.addEventListener('change', function() {
    setThemePreference(this.checked);
    applySettings();
  });

  bgImageToggle.addEventListener('change', function() {
    setBackgroundPreference(this.checked);
    applySettings();
  });

  blurToggle.addEventListener('change', function() {
    setBlurPreference(this.checked);
    applySettings();
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
});
