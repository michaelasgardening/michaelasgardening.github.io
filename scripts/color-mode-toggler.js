var savedTheme = localStorage.getItem('theme');

window.onload = function () {
    var savedTheme = localStorage.getItem('theme');
    var preferedTheme = getPreferedTheme();
    setTheme(preferedTheme);

    document.getElementById("darkModeSwitch").addEventListener("change", themeToggle);

    function themeToggle() {
        var selectedTheme = 'light';
        if (this.checked) {
            selectedTheme = 'dark';
        }
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    }
}

// Check for a saved preference or default to OS default
function getPreferedTheme() {
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    if (savedTheme) {
        return savedTheme;
    }
    return systemTheme;
}

// Set the theme amd save a preference
function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    var isDark = (theme === 'dark');
    var switchElement = document.getElementById('darkModeSwitch');
    switchElement.checked = isDark;
}

// Watch for OS System Preference Changes and change the theme if no preference stored
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", systemThemeChanged);
function systemThemeChanged() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme != 'light' && savedTheme != 'dark') {
        var theme = getPreferedTheme();
        setTheme(theme);
    }
}
