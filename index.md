---
layout: default
---

<!-- ============================================ -->
<!-- HERO SECTION -->
<!-- ============================================ -->

<div style="text-align:center;padding:30px 0 20px 0;">
    <h1 style="font-size:3.2em;margin:0;color:#00ff41;text-shadow:0 0 40px rgba(0,255,65,0.2);letter-spacing:-1px;">
        ⚡ Keemop's Tech Lab
    </h1>
    <p style="font-size:1.2em;color:#c0c0c0;max-width:600px;margin:10px auto 0;line-height:1.6;">
        12-year-old explorer · Linux lover · Builder
    </p>
    <div style="width:80px;height:3px;background:#00ff41;margin:15px auto;border-radius:2px;box-shadow:0 0 20px rgba(0,255,65,0.3);"></div>
    <p style="font-size:1em;color:#808080;max-width:550px;margin:10px auto;">
        Step-by-step guides to help beginners master Linux, dual-booting, and more.
    </p>
</div>

---

<!-- ============================================ -->
<!-- SEARCH BAR -->
<!-- ============================================ -->

<div style="width:100%;margin:10px 0 25px 0;">
    <a href="/search" style="display:block;width:100%;text-decoration:none;">
        <div style="width:100%;padding:16px 24px;background:#0a0a0a;border:2px solid #00ff41;border-radius:12px;box-sizing:border-box;display:flex;align-items:center;gap:15px;transition:all 0.3s ease;cursor:pointer;"
             onmouseover="this.style.background='rgba(0,255,65,0.05)';this.style.borderColor='#ffffff';this.style.boxShadow='0 0 40px rgba(0,255,65,0.15)';"
             onmouseout="this.style.background='#0a0a0a';this.style.borderColor='#00ff41';this.style.boxShadow='none';">
            <span style="color:#00ff41;font-size:20px;font-family:'Courier New',monospace;">🔍</span>
            <span style="color:#555;font-size:16px;font-family:'Courier New',monospace;flex:1;transition:color 0.3s ease;"
                  onmouseover="this.style.color='#00ff41';"
                  onmouseout="this.style.color='#555';">Search all guides...</span>
            <span style="color:#333;font-size:11px;font-family:'Courier New',monospace;border:1px solid #222;padding:3px 14px;border-radius:20px;">Click to search</span>
        </div>
    </a>
</div>

---

<!-- ============================================ -->
<!-- GUIDES SECTION -->
<!-- ============================================ -->

<h2 style="color:#00ff41;font-size:1.8em;margin:30px 0 20px 0;border-bottom:1px solid #1a3a1a;padding-bottom:10px;display:flex;align-items:center;gap:10px;">
    📚 <span style="color:#c0c0c0;font-size:0.6em;font-weight:normal;">My Tech Guides</span>
</h2>

<!-- GUIDE CARDS (GRID) -->
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin:0 0 30px 0;">

    <!-- CARD 1: DUAL-BOOT -->
    <a href="/dual_booting" style="text-decoration:none;color:inherit;border:2px solid #00ff41;border-radius:16px;padding:25px 25px 20px;background:rgba(0,255,65,0.03);transition:all 0.3s ease;display:block;box-shadow:0 0 20px rgba(0,255,65,0.03);"
       onmouseover="this.style.background='rgba(0,255,65,0.08)';this.style.borderColor='#ffffff';this.style.boxShadow='0 0 40px rgba(0,255,65,0.15)';this.style.transform='translateY(-4px)';"
       onmouseout="this.style.background='rgba(0,255,65,0.03)';this.style.borderColor='#00ff41';this.style.boxShadow='0 0 20px rgba(0,255,65,0.03)';this.style.transform='translateY(0)';">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <h3 style="margin:0;color:#00ff41;font-size:1.1em;">🐧 Dual-Boot Guide</h3>
            <span style="background:#00ff41;color:#0a0a0a;font-size:0.6em;font-weight:bold;padding:2px 14px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">✅ Ready</span>
        </div>
        <p style="color:#c0c0c0;font-size:0.95em;line-height:1.6;margin:8px 0 12px 0;">
            Windows + Linux side-by-side. Both POVs, GRUB fixes, and mistakes to avoid.
        </p>
        <span style="color:#00ff41;font-weight:bold;font-size:0.9em;">➡️ Start Learning →</span>
    </a>

    <!-- CARD 2: ARCH LINUX -->
    <a href="/arch_install" style="text-decoration:none;color:inherit;border:2px solid #333;border-radius:16px;padding:25px 25px 20px;background:rgba(255,255,255,0.02);transition:all 0.3s ease;display:block;opacity:0.75;"
       onmouseover="this.style.borderColor='#ffaa00';this.style.opacity='1';this.style.transform='translateY(-4px)';this.style.boxShadow='0 0 30px rgba(255,170,0,0.1)';"
       onmouseout="this.style.borderColor='#333';this.style.opacity='0.75';this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <h3 style="margin:0;color:#888;font-size:1.1em;">🛠️ Arch Linux</h3>
            <span style="background:#ffaa00;color:#0a0a0a;font-size:0.6em;font-weight:bold;padding:2px 14px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">⏳ Coming Soon</span>
        </div>
        <p style="color:#666;font-size:0.95em;line-height:1.6;margin:8px 0 12px 0;">
            Install Arch the hard way—no scripts, just terminal and persistence.
        </p>
        <span style="color:#666;font-weight:bold;font-size:0.9em;">⏳ Preview →</span>
    </a>

    <!-- CARD 3: FIX GRUB -->
    <a href="/fix_grub" style="text-decoration:none;color:inherit;border:2px solid #333;border-radius:16px;padding:25px 25px 20px;background:rgba(255,255,255,0.02);transition:all 0.3s ease;display:block;opacity:0.75;"
       onmouseover="this.style.borderColor='#ffaa00';this.style.opacity='1';this.style.transform='translateY(-4px)';this.style.boxShadow='0 0 30px rgba(255,170,0,0.1)';"
       onmouseout="this.style.borderColor='#333';this.style.opacity='0.75';this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <h3 style="margin:0;color:#888;font-size:1.1em;">🔧 Fix GRUB</h3>
            <span style="background:#ffaa00;color:#0a0a0a;font-size:0.6em;font-weight:bold;padding:2px 14px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">⏳ Coming Soon</span>
        </div>
        <p style="color:#666;font-size:0.95em;line-height:1.6;margin:8px 0 12px 0;">
            Rescue your bootloader when Windows overwrites GRUB.
        </p>
        <span style="color:#666;font-weight:bold;font-size:0.9em;">⏳ Preview →</span>
    </a>

</div>

---

<!-- ============================================ -->
<!-- QUICK LINKS (Now + Search) -->
<!-- ============================================ -->

<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:15px;margin:30px 0 20px 0;">

    <a href="/now" style="display:inline-block;padding:12px 30px;background:transparent;color:#00ff41;border:2px solid #00ff41;border-radius:10px;font-weight:bold;font-size:15px;text-decoration:none;font-family:'Courier New',monospace;transition:all 0.3s ease;"
       onmouseover="this.style.background='#00ff41';this.style.color='#0a0a0a';this.style.boxShadow='0 0 30px rgba(0,255,65,0.3)';" 
       onmouseout="this.style.background='transparent';this.style.color='#00ff41';this.style.boxShadow='none';">
        📌 What I'm Working On Now
    </a>

    <a href="/search" style="display:inline-block;padding:12px 30px;background:transparent;color:#00ff41;border:2px solid #00ff41;border-radius:10px;font-weight:bold;font-size:15px;text-decoration:none;font-family:'Courier New',monospace;transition:all 0.3s ease;"
       onmouseover="this.style.background='#00ff41';this.style.color='#0a0a0a';this.style.boxShadow='0 0 30px rgba(0,255,65,0.3)';" 
       onmouseout="this.style.background='transparent';this.style.color='#00ff41';this.style.boxShadow='none';">
        🔍 Search All Guides
    </a>

</div>

---

<!-- ============================================ -->
<!-- ABOUT ME -->
<!-- ============================================ -->

<div style="margin:50px 0 20px 0;padding:25px;border-top:1px solid #1a3a1a;border-bottom:1px solid #1a3a1a;">
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <h2 style="color:#00ff41;font-size:1.6em;margin:0 0 10px 0;">🧑‍💻 About Me</h2>
        <p style="color:#c0c0c0;line-height:1.7;max-width:550px;margin:0 auto;">
            I'm <strong style="color:#00ff41;">Keemop</strong>, a 12-year-old tech explorer. 
            I built this site to share what I learn about Linux, coding, and computers. 
            If I can do it, so can you!
        </p>
    </div>
</div>

---

<!-- ============================================ -->
<!-- EASTER EGG -->
<!-- ============================================ -->

<div style="text-align:center;margin:45px 0 20px 0;padding:20px;border-radius:14px;background:rgba(0,255,65,0.02);border:1px solid rgba(0,255,65,0.08);transition:all 0.4s ease;"
     onmouseover="this.style.background='rgba(0,255,65,0.06)';this.style.borderColor='#00ff41';"
     onmouseout="this.style.background='rgba(0,255,65,0.02)';this.style.borderColor='rgba(0,255,65,0.08)';">
    
    <div style="font-size:13px;color:#444;margin-bottom:10px;transition:all 0.3s ease;font-family:'Courier New',monospace;letter-spacing:2px;"
         onmouseover="this.style.color='#00ff41';this.style.fontSize='15px';this.textContent='🎮 CLICK HERE TO PLAY FLAPPY TUX! 🐧';" 
         onmouseout="this.style.color='#444';this.style.fontSize='13px';this.textContent='🐧 🐧 🐧  hover for secret  🐧 🐧 🐧';">
        🐧 🐧 🐧  hover for secret  🐧 🐧 🐧
    </div>
    
    <a href="/easteregg/" style="display:inline-block;padding:14px 36px;background:transparent;color:#00ff41;text-decoration:none;border:2px solid #00ff41;border-radius:10px;font-family:'Courier New',monospace;font-size:17px;font-weight:bold;transition:all 0.3s ease;opacity:0.35;"
       onmouseover="this.style.background='#00ff41';this.style.color='#0a0a0a';this.style.opacity='1';this.style.boxShadow='0 0 50px rgba(0,255,65,0.4)';this.style.transform='scale(1.06)';" 
       onmouseout="this.style.background='transparent';this.style.color='#00ff41';this.style.opacity='0.35';this.style.boxShadow='none';this.style.transform='scale(1)';">
        🐧 PLAY FLAPPY TUX 🐧
    </a>
</div>

---

<!-- ============================================ -->
<!-- FOOTER -->
<!-- ============================================ -->

<p style="text-align:center;color:#444;font-size:0.8em;margin:40px 0 10px 0;font-family:'Courier New',monospace;letter-spacing:1px;">
    Built with ❤️ on GitHub Pages
</p>
