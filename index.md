---
layout: default
---

<style>
    /* ===== GLASS-MORPHISM EFFECTS ===== */
    .glass {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(0, 255, 65, 0.12);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .glass-light {
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.06);
    }

    /* ===== ANIMATIONS ===== */
    @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 65, 0.2); }
        50% { box-shadow: 0 0 50px rgba(0, 255, 65, 0.4); }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
    }

    @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
    }

    .animate-fadeUp {
        animation: fadeUp 0.8s ease forwards;
    }

    .animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
    .animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
    .animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
    .animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
    .animate-delay-5 { animation-delay: 0.5s; opacity: 0; }

    /* ===== CARD GRID ===== */
    .guide-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
        margin: 20px 0 30px 0;
    }

    .guide-card-sleek {
        position: relative;
        border-radius: 20px;
        padding: 28px 26px 22px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        text-decoration: none;
        color: inherit;
        display: block;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background: rgba(255, 255, 255, 0.02);
    }

    .guide-card-sleek::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 65, 0.08), transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }

    .guide-card-sleek:hover::before {
        opacity: 1;
    }

    .guide-card-sleek:hover {
        transform: translateY(-8px);
        border-color: rgba(0, 255, 65, 0.3);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 65, 0.05);
    }

    .guide-card-sleek .icon-big {
        font-size: 2.2em;
        display: block;
        margin-bottom: 12px;
    }

    .guide-card-sleek h3 {
        color: #ffffff;
        font-size: 1.15em;
        margin: 0 0 6px 0;
        font-weight: 600;
        letter-spacing: -0.3px;
    }

    .guide-card-sleek p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.92em;
        line-height: 1.6;
        margin: 0 0 14px 0;
    }

    .guide-card-sleek .badge-sleek {
        display: inline-block;
        font-size: 0.6em;
        font-weight: 600;
        padding: 3px 14px;
        border-radius: 50px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
    }

    .badge-ready {
        background: rgba(0, 255, 65, 0.15);
        color: #00ff41;
        border: 1px solid rgba(0, 255, 65, 0.2);
    }

    .badge-soon {
        background: rgba(255, 170, 0, 0.15);
        color: #ffaa00;
        border: 1px solid rgba(255, 170, 0, 0.2);
    }

    .guide-card-sleek .arrow-link {
        color: rgba(255, 255, 255, 0.3);
        font-weight: 500;
        font-size: 0.9em;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .guide-card-sleek:hover .arrow-link {
        color: #00ff41;
        gap: 12px;
    }

    /* ===== SEARCH BAR ===== */
    .search-bar-sleek {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 22px;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.02);
    }

    .search-bar-sleek:hover {
        border-color: rgba(0, 255, 65, 0.3);
        background: rgba(255, 255, 255, 0.04);
        box-shadow: 0 0 40px rgba(0, 255, 65, 0.05);
    }

    .search-bar-sleek .icon {
        color: rgba(255, 255, 255, 0.2);
        font-size: 20px;
    }

    .search-bar-sleek .text {
        color: rgba(255, 255, 255, 0.25);
        font-size: 15px;
        font-family: 'Courier New', monospace;
        flex: 1;
    }

    .search-bar-sleek .hint {
        color: rgba(255, 255, 255, 0.08);
        font-size: 11px;
        font-family: 'Courier New', monospace;
        border: 1px solid rgba(255, 255, 255, 0.06);
        padding: 3px 14px;
        border-radius: 50px;
    }

    /* ===== QUICK ACTION BUTTONS ===== */
    .quick-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin: 30px 0 20px 0;
    }

    .btn-action {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 28px;
        border-radius: 50px;
        font-weight: 500;
        font-size: 14px;
        font-family: 'Courier New', monospace;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background: rgba(255, 255, 255, 0.02);
        color: rgba(255, 255, 255, 0.5);
    }

    .btn-action:hover {
        border-color: rgba(0, 255, 65, 0.3);
        color: #00ff41;
        background: rgba(0, 255, 65, 0.05);
        transform: translateY(-2px);
    }

    .btn-action-primary {
        background: rgba(0, 255, 65, 0.08);
        border-color: rgba(0, 255, 65, 0.15);
        color: #00ff41;
    }

    .btn-action-primary:hover {
        background: rgba(0, 255, 65, 0.15);
        border-color: rgba(0, 255, 65, 0.3);
        box-shadow: 0 0 30px rgba(0, 255, 65, 0.1);
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 600px) {
        .guide-grid {
            grid-template-columns: 1fr;
        }
        .quick-actions {
            flex-direction: column;
            align-items: center;
        }
        .btn-action {
            width: 100%;
            justify-content: center;
        }
    }
</style>

<!-- ============================================================ -->
<!-- HERO -->
<!-- ============================================================ -->

<div class="animate-fadeUp animate-delay-1" style="text-align:center;padding:40px 0 20px 0;">
    <div style="display:inline-block;padding:4px 16px;border-radius:50px;border:1px solid rgba(0,255,65,0.1);margin-bottom:16px;font-size:12px;color:rgba(0,255,65,0.4);font-family:'Courier New',monospace;letter-spacing:2px;">
        ● ONLINE
    </div>
    <h1 style="font-size:3.5em;margin:0;font-weight:700;letter-spacing:-2px;background:linear-gradient(135deg,#00ff41 0%,#00cc88 50%,#00ff41 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite;">
        Keemop's Tech Lab
    </h1>
    <p style="font-size:1.15em;color:rgba(255,255,255,0.35);max-width:520px;margin:12px auto 0;line-height:1.7;font-weight:300;letter-spacing:0.3px;">
        12-year-old explorer · Linux · Building in public
    </p>
    <div style="width:60px;height:2px;background:linear-gradient(90deg,transparent,#00ff41,transparent);margin:18px auto;border-radius:2px;"></div>
</div>

<!-- ============================================================ -->
<!-- SEARCH -->
<!-- ============================================================ -->

<div class="animate-fadeUp animate-delay-2">
    <a href="/search" class="search-bar-sleek">
        <span class="icon">⌘</span>
        <span class="text">Search guides, tutorials, commands...</span>
        <span class="hint">⌘K</span>
    </a>
</div>

<!-- ============================================================ -->
<!-- GUIDES -->
<!-- ============================================================ -->

<div class="animate-fadeUp animate-delay-3">
    <div style="display:flex;justify-content:space-between;align-items:center;margin:40px 0 16px 0;">
        <h2 style="color:rgba(255,255,255,0.8);font-size:1.3em;font-weight:500;margin:0;letter-spacing:-0.3px;">
            📖 Guides
        </h2>
        <span style="color:rgba(255,255,255,0.1);font-size:0.75em;font-family:'Courier New',monospace;">3 published</span>
    </div>

    <div class="guide-grid">

        <!-- CARD 1: DUAL-BOOT -->
        <a href="/dual_booting" class="guide-card-sleek" style="border-color:rgba(0,255,65,0.08);">
            <span class="icon-big">🐧</span>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <h3>Dual-Boot Guide</h3>
                <span class="badge-sleek badge-ready">Ready</span>
            </div>
            <p>Windows + Linux side-by-side. Both POVs, GRUB fixes, and mistakes to avoid.</p>
            <span class="arrow-link">Read guide →</span>
        </a>

        <!-- CARD 2: ARCH -->
        <a href="/arch_install" class="guide-card-sleek" style="border-color:rgba(255,255,255,0.04);">
            <span class="icon-big">⚡</span>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <h3>Arch Linux</h3>
                <span class="badge-sleek badge-soon">Coming Soon</span>
            </div>
            <p>Install Arch the hard way—no scripts, just terminal and persistence.</p>
            <span class="arrow-link">Preview →</span>
        </a>

        <!-- CARD 3: GRUB -->
        <a href="/fix_grub" class="guide-card-sleek" style="border-color:rgba(255,255,255,0.04);">
            <span class="icon-big">🔧</span>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <h3>Fix GRUB</h3>
                <span class="badge-sleek badge-soon">Coming Soon</span>
            </div>
            <p>Rescue your bootloader when Windows overwrites GRUB.</p>
            <span class="arrow-link">Preview →</span>
        </a>

    </div>
</div>

<!-- ============================================================ -->
<!-- QUICK ACTIONS -->
<!-- ============================================================ -->

<div class="animate-fadeUp animate-delay-4">
    <div class="quick-actions">
        <a href="/now" class="btn-action btn-action-primary">
            📌 Now
        </a>
        <a href="/search" class="btn-action">
            🔍 Search
        </a>
        <a href="/feedback" class="btn-action">
            💬 Feedback
        </a>
    </div>
</div>

<!-- ============================================================ -->
<!-- ABOUT + EASTER EGG -->
<!-- ============================================================ -->

<div class="animate-fadeUp animate-delay-5">

    <!-- About -->
    <div style="text-align:center;padding:30px 0 20px 0;border-top:1px solid rgba(255,255,255,0.04);margin-top:10px;">
        <p style="color:rgba(255,255,255,0.2);font-size:0.85em;max-width:480px;margin:0 auto;line-height:1.8;font-weight:300;">
            I'm <span style="color:rgba(255,255,255,0.4);">Keemop</span>, 12 years old.
            I build things, break things, and share what I learn.
        </p>
    </div>

    <!-- Easter Egg -->
    <div style="text-align:center;padding:20px 0 10px 0;">
        <div style="font-size:11px;color:rgba(255,255,255,0.04);font-family:'Courier New',monospace;letter-spacing:4px;transition:all 0.4s ease;cursor:default;"
             onmouseover="this.style.color='#00ff41';this.style.letterSpacing='6px';this.textContent='🎮 CLICK TO PLAY FLAPPY TUX';" 
             onmouseout="this.style.color='rgba(255,255,255,0.04)';this.style.letterSpacing='4px';this.textContent='🐧 🐧 🐧  ·  ·  ·  🐧 🐧 🐧';">
            🐧 🐧 🐧  ·  ·  ·  🐧 🐧 🐧
        </div>
        <a href="/easteregg/" style="display:inline-block;margin-top:8px;padding:8px 24px;border-radius:50px;font-size:12px;font-family:'Courier New',monospace;color:rgba(255,255,255,0.05);text-decoration:none;border:1px solid rgba(255,255,255,0.03);transition:all 0.4s ease;"
           onmouseover="this.style.color='#00ff41';this.style.borderColor='rgba(0,255,65,0.2)';this.style.background='rgba(0,255,65,0.03)';this.textContent='🐧 PLAY FLAPPY TUX 🐧';" 
           onmouseout="this.style.color='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.03)';this.style.background='transparent';this.textContent='▶  click to reveal';">
            ▶  click to reveal
        </a>
    </div>

    <!-- Footer -->
    <p style="text-align:center;color:rgba(255,255,255,0.03);font-size:0.6em;margin:40px 0 10px 0;font-family:'Courier New',monospace;letter-spacing:3px;">
        BUILT WITH ❤️ ON GITHUB PAGES
    </p>

</div>
