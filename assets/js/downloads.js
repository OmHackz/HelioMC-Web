// Downloads page functionality

document.addEventListener('DOMContentLoaded', () => {
    initDownloads();
});

function initDownloads() {
    initPlatformDetection();
    initInstallTabs();
}

// Platform detection for recommended download
function initPlatformDetection() {
    const recommendedDiv = document.getElementById('recommendedDownload');
    const chooseAnotherBtn = document.getElementById('chooseAnotherBtn');
    
    if (!recommendedDiv) return;
    
    try {
        const userAgent = navigator.userAgent.toLowerCase();
        const platform = navigator.platform.toLowerCase();
        
        let detectedOS = null;
        
        if (userAgent.includes('win') || platform.includes('win')) {
            detectedOS = 'windows';
        } else if (userAgent.includes('mac') || platform.includes('mac')) {
            detectedOS = 'macos';
        } else if (userAgent.includes('linux') || platform.includes('linux')) {
            detectedOS = 'linux';
        }
        
        if (detectedOS) {
            // Don't show fake download - show message that no releases available yet
            recommendedDiv.innerHTML = `
                <div class="recommended-info">
                    <p class="recommended-os">Detected: <strong>${getOSName(detectedOS)}</strong></p>
                    <p class="recommended-status">No published releases available yet</p>
                    <p class="recommended-note-text">Release metadata would be shown here when available. Use manual downloads or build from source.</p>
                </div>
            `;
        } else {
            recommendedDiv.innerHTML = `
                <p class="recommended-note">Unable to reliably detect your platform. Please choose manually below.</p>
            `;
        }
    } catch (e) {
        recommendedDiv.innerHTML = `
            <p class="recommended-note">Unable to detect platform. Please choose manually below.</p>
        `;
    }
    
    if (chooseAnotherBtn) {
        chooseAnotherBtn.addEventListener('click', () => {
            const manualSection = document.getElementById('manualDownloads');
            if (manualSection) {
                manualSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

function getOSName(os) {
    switch(os) {
        case 'windows': return 'Windows';
        case 'macos': return 'macOS';
        case 'linux': return 'Linux';
        default: return os;
    }
}

// Install tabs
function initInstallTabs() {
    const tabs = document.querySelectorAll('.install-tab');
    const contents = document.querySelectorAll('.install-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const platform = tab.getAttribute('data-platform');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            contents.forEach(content => {
                content.classList.remove('active');
            });
            
            const targetContent = document.getElementById(`install-${platform}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}
