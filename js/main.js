document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to the Minecraft 3DS Wiki!');

  // Function to get theme preference from localStorage
  const getThemePreference = () => {
    return localStorage.getItem('theme') === 'light' ? true : false;
  };

  // Function to set theme preference in localStorage
  const setThemePreference = (isLight) => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  // Function to get background image preference from localStorage
  const getBackgroundPreference = () => {
    return localStorage.getItem('bgImage') === 'true' ? true : false;
  };

  // Function to set background image preference in localStorage
  const setBackgroundPreference = (useImage) => {
    localStorage.setItem('bgImage', useImage ? 'true' : 'false');
  };

  // Apply theme and background settings
  const applySettings = () => {
    const themeToggle = document.getElementById('themeToggle');
    const bgImageToggle = document.getElementById('bgImageToggle');
    
    document.body.classList.toggle('light-mode', themeToggle.checked);
    document.body.classList.toggle('no-bg', !bgImageToggle.checked); // Disable background if unchecked
  };

  // Settings Modal Functionality
  const settingsIcon = document.getElementById('settingsIcon');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsButton = document.getElementById('closeSettings');
  const themeToggle = document.getElementById('themeToggle');
  const bgImageToggle = document.getElementById('bgImageToggle');

  // Load the user's theme and background preferences
  themeToggle.checked = getThemePreference();
  bgImageToggle.checked = getBackgroundPreference();
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

  // Existing code for card interaction and other features remains unchanged
  // ... (keep your existing event listeners for details and cards here)
  
  // Disable right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable text selection
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
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

