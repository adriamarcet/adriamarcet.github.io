/*! kelpui v1.17.2 | (c) Chris Ferdinandi | http://github.com/cferdinandi/kelp */
(() => {
  // src/js/dark-mode-auto.js
  var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  // Check localStorage for saved preference, fall back to system preference
  var savedTheme = localStorage.getItem('theme')
  var isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDarkMode.matches
  document.documentElement.classList.toggle('dark', isDarkMode)
  prefersDarkMode.addEventListener('change', (event) => {
    // Only update if no saved preference, otherwise use the saved one
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.toggle('dark', event.matches)
    }
  })
  // Expose function to toggle theme and save preference
  window.toggleTheme = function() {
    var isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }
})()
