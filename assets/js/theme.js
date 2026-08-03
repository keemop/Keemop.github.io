// ============================================
// THEME SWITCHER - Keemop's Tech Lab
// ============================================

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('themeToggle');
    
    // Toggle the theme class
    body.classList.toggle('light-theme');
    
    // Change button icon
    if (body.classList.contains('light-theme')) {
        button.textContent = '🌙';
        button.style.borderColor = '#0066cc';
        button.style.color = '#0066cc';
        localStorage.setItem('theme', 'light');
    } else {
        button.textContent = '☀️';
        button.style.borderColor = '#00ff41';
        button.style.color = '#00ff41';
        localStorage.setItem('theme', 'dark');
    }
}

// ============================================
// LOAD SAVED THEME
// ============================================

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const button = document.getElementById('themeToggle');
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if (button) {
            button.textContent = '🌙';
            button.style.borderColor = '#0066cc';
            button.style.color = '#0066cc';
        }
    } else {
        // Default: dark theme
        if (button) {
            button.textContent = '☀️';
            button.style.borderColor = '#00ff41';
            button.style.color = '#00ff41';
        }
    }
}

// Load theme when page loads
document.addEventListener('DOMContentLoaded', loadTheme);
