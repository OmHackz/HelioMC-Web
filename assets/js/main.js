// Main JavaScript for HelioMC Website

// Theme Management
function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-option');
    const themeLabel = document.querySelector('.theme-label');
    
    if (!themeBtn || !themeDropdown) return;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('heliomc-theme') || 'system';
    updateThemeUI(savedTheme);
    
    // Toggle dropdown
    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
            themeDropdown.classList.remove('active');
        }
    });
    
    // Theme option selection
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            localStorage.setItem('heliomc-theme', theme);
            updateThemeUI(theme);
            themeDropdown.classList.remove('active');
            
            // Apply theme
            applyTheme(theme);
        });
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const savedTheme = localStorage.getItem('heliomc-theme') || 'system';
        if (savedTheme === 'system') {
            applyTheme('system');
        }
    });
}

function updateThemeUI(theme) {
    const themeLabel = document.querySelector('.theme-label');
    if (!themeLabel) return;
    
    switch(theme) {
        case 'light':
            themeLabel.textContent = 'Light';
            break;
        case 'dark':
            themeLabel.textContent = 'Dark';
            break;
        case 'system':
        default:
            themeLabel.textContent = 'System';
            break;
    }
}

function applyTheme(theme) {
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        } else {
            navMenu.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Copy to clipboard functionality
function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                const originalText = btn.textContent;
                btn.textContent = 'Copied';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                textArea.remove();
                
                const originalText = btn.textContent;
                btn.textContent = 'Copied';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            }
        });
    });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initCopyButtons();
});
