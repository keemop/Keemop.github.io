// ============================================
// SEARCH ENGINE - Keemop's Tech Lab
// ============================================

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const searchStats = document.getElementById('searchStats');

// ============================================
// YOUR SITE DATA — All pages included
// ============================================

const pages = [
    {
        title: "🏠 Home",
        url: "/",
        description: "Welcome to Keemop's Tech Lab — Linux guides, dual-boot tutorials, Arch Linux, and GRUB fixes.",
        keywords: "home, welcome, keemop, tech lab, linux, guides"
    },
    {
        title: "🐧 Dual-Boot Windows 10 and Linux",
        url: "/dual_booting",
        description: "Step-by-step guide for installing Linux alongside Windows. Includes both Windows-first and Linux-first POVs, GRUB fixes, and common mistakes.",
        keywords: "dual-boot, windows 10, linux, ubuntu, grub, bootloader, install, beginner"
    },
    {
        title: "🛠️ Install Arch Linux (The Hard Way)",
        url: "/arch_install",
        description: "Coming soon — install Arch Linux from scratch using only the terminal. No scripts, just pure Linux.",
        keywords: "arch, arch linux, install, terminal, coming soon"
    },
    {
        title: "🔧 Fix GRUB Bootloader",
        url: "/fix_grub",
        description: "Coming soon — recover GRUB when Windows overwrites it. Live USB rescue method explained.",
        keywords: "grub, bootloader, fix, rescue, windows, linux, recovery"
    },
    {
        title: "🐧 Flappy Tux — Easter Egg Game",
        url: "/easteregg/",
        description: "Play Flappy Bird with Tux the penguin. Hidden Easter egg on my site — click or space to fly.",
        keywords: "easter egg, flappy bird, flappy tux, game, penguin, tux, hidden"
    },
    {
        title: "🔍 Search",
        url: "/search/",
        description: "Search all guides and tutorials on Keemop's Tech Lab.",
        keywords: "search, find, guides"
    },
    {
        title: "📬 Feedback",
        url: "/feedback/",
        description: "Send feedback or suggestions to help improve the site.",
        keywords: "feedback, contact, suggestions"
    }
];

// ============================================
// SEARCH FUNCTION
// ============================================

function performSearch(query) {
    if (!query || query.length < 2) {
        resultsContainer.innerHTML = '';
        searchStats.textContent = '💡 Type at least 2 characters';
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const words = searchTerm.split(' ').filter(w => w.length > 0);

    const results = pages.map(page => {
        let score = 0;
        const title = page.title.toLowerCase();
        const description = page.description.toLowerCase();
        const keywords = page.keywords.toLowerCase();

        words.forEach(word => {
            if (title.includes(word)) score += 10;
            if (keywords.includes(word)) score += 5;
            if (description.includes(word)) score += 3;
        });

        if (title.includes(searchTerm)) score += 25;
        if (keywords.includes(searchTerm)) score += 15;

        return { ...page, score };
    });

    const filtered = results.filter(r => r.score > 0).sort((a, b) => b.score - a.score);
    displayResults(filtered, searchTerm);
}

// ============================================
// DISPLAY RESULTS
// ============================================

function displayResults(results, searchTerm) {
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                🕵️ No results for "<strong>${searchTerm}</strong>"<br>
                <span style="font-size:0.8em;color:#444;">Try: dual-boot, arch, grub, linux, flappy</span>
            </div>
        `;
        searchStats.textContent = '0 results';
        return;
    }

    let html = '';
    results.forEach((result, index) => {
        let title = result.title;
        let desc = result.description;
        const words = searchTerm.split(' ').filter(w => w.length > 0);

        words.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            title = title.replace(regex, '<span class="highlight">$1</span>');
            desc = desc.replace(regex, '<span class="highlight">$1</span>');
        });

        const badge = index === 0 ? '⭐ Best Match' : '✅ Match';
        html += `
            <a href="${result.url}" class="result-item">
                <h3>${title} <span class="badge-match">${badge}</span></h3>
                <p>${desc}</p>
                <div class="url">📂 ${result.url}</div>
            </a>
        `;
    });

    resultsContainer.innerHTML = html;
    searchStats.textContent = `🔍 ${results.length} result${results.length > 1 ? 's' : ''} found`;
}

// ============================================
// EVENTS
// ============================================

searchInput.addEventListener('input', function () {
    performSearch(this.value);
});

searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const first = document.querySelector('.result-item');
        if (first) window.location.href = first.getAttribute('href');
    }
});

document.addEventListener('DOMContentLoaded', () => searchInput.focus());

console.log('🔍 Search loaded —', pages.length, 'pages indexed');
