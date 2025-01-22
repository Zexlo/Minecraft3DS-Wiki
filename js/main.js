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

  // Function to get background blur preference from localStorage
  const getBlurPreference = () => {
    return localStorage.getItem('blur') === 'true' ? true : false;
  };

  // Function to set background blur preference in localStorage
  const setBlurPreference = (useBlur) => {
    localStorage.setItem('blur', useBlur ? 'true' : 'false');
  };


  // Apply theme, background, and header settings
  const applySettings = () => {
    const themeToggle = document.getElementById('themeToggle');
    const blurToggle = document.getElementById('blurToggle');
    const settingsModal = document.getElementById('settingsModal');
    const header = document.querySelector('header');

    document.body.classList.toggle('light-mode', themeToggle.checked);
    settingsModal.classList.toggle('blur', blurToggle.checked);
  };

  // Settings Modal Functionality
  const settingsIcon = document.getElementById('settingsIcon');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsButton = document.getElementById('closeSettings');
  const themeToggle = document.getElementById('themeToggle');
  const blurToggle = document.getElementById('blurToggle');

  // Load the user's preferences
  themeToggle.checked = getThemePreference();
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

  // Collapsible functionality (moved into the main event listener)
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
