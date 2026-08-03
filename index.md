---
layout: default
---

<style>
  .guide-card {
    display: block;
    border: 2px solid #00ff41;
    border-radius: 12px;
    padding: 18px 22px;
    margin: 16px 0;
    background: rgba(0, 255, 65, 0.04);
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    position: relative;
  }
  .guide-card:hover {
    background: rgba(0, 255, 65, 0.12);
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.25);
    transform: translateY(-3px);
    border-color: #ffffff;
  }
  .guide-card h3 {
    margin-top: 0;
    margin-bottom: 8px;
    color: #00ff41;
    font-size: 1.2em;
  }
  .guide-card p {
    color: #d0d0d0;
    margin: 5px 0 10px 0;
    line-height: 1.5;
  }
  .guide-card .arrow {
    color: #00ff41;
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .guide-card:hover .arrow {
    color: #ffffff;
    transform: translateX(8px);
  }
  .guide-card .click-hint {
    color: #00ff41;
    font-size: 0.8em;
    opacity: 0.6;
    display: block;
    margin-top: 8px;
    font-style: italic;
    border-top: 1px solid rgba(0, 255, 65, 0.2);
    padding-top: 8px;
  }
  .guide-card:hover .click-hint {
    opacity: 1;
    color: #ffffff;
  }
  .badge {
    display: inline-block;
    background: #00ff41;
    color: #0a0a0a;
    font-size: 0.7em;
    padding: 2px 10px;
    border-radius: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
  .badge-soon {
    background: #ffaa00;
    color: #0a0a0a;
  }
</style>

# 👋 Welcome to My Tech Lab!

<!-- ============================================ -->
<!-- FULL-WIDTH SEARCH BAR -->
<!-- ============================================ -->

<div style="width:100%;margin:15px 0;padding:0;">
    <a href="/search" style="display:block;width:100%;text-decoration:none;">
        <div style="width:100%;padding:16px 22px;background:#0a0a0a;border:2px solid #00ff41;border-radius:10px;box-sizing:border-box;display:flex;align-items:center;gap:15px;transition:all 0.3s ease;cursor:pointer;"
             onmouseover="this.style.background='rgba(0,255,65,0.05)';this.style.borderColor='#ffffff';this.style.boxShadow='0 0 40px rgba(0,255,65,0.15)';"
             onmouseout="this.style.background='#0a0a0a';this.style.borderColor='#00ff41';this.style.boxShadow='none';">
            
            <span style="color:#00ff41;font-size:22px;font-family:'Courier New',monospace;">🔍</span>
            <span style="color:#555;font-size:17px;font-family:'Courier New',monospace;flex:1;transition:color 0.3s ease;"
                  onmouseover="this.style.color='#00ff41';"
                  onmouseout="this.style.color='#555';">
                Search all guides...
            </span>
            <span style="color:#333;font-size:11px;font-family:'Courier New',monospace;border:1px solid #222;padding:2px 12px;border-radius:4px;">
                Click to search
            </span>
        </div>
    </a>
</div>

I'm **Keemop**, a 12-year-old who loves computers, coding, and tinkering with operating systems. This is my collection of guides to help other beginners!

---

## 📚 My Tech Guides

<!-- ===== CARD 1: DUAL-BOOT ===== -->
<a href="/dual_booting" class="guide-card">
  <h3>🐧 Dual-Boot Windows 10 and Linux <span class="badge">✅ Ready</span></h3>
  <p>Step-by-step guide for installing Linux alongside Windows (or Windows alongside Linux!). Includes both POVs and how to fix GRUB when it breaks.</p>
  <span class="arrow">➡️ Read Full Guide →</span>
  <span class="click-hint">👆 Click anywhere on this card to open</span>
</a>

<!-- ===== CARD 2: ARCH LINUX ===== -->
<a href="/arch_install" class="guide-card">
  <h3>🛠️ Install Arch Linux (The Hard Way) <span class="badge badge-soon">⏳ Coming Soon</span></h3>
  <p>Learn how to install Arch Linux from scratch—no automated scripts, just pure terminal and patience.</p>
  <span class="arrow">➡️ Preview →</span>
  <span class="click-hint">👆 Click anywhere on this card to open</span>
</a>

<!-- ===== CARD 3: FIX GRUB ===== -->
<a href="/fix_grub" class="guide-card">
  <h3>🔧 Fix GRUB Bootloader <span class="badge badge-soon">⏳ Coming Soon</span></h3>
  <p>What to do when Windows overwrites GRUB and you can't boot into Linux. Live USB rescue method explained.</p>
  <span class="arrow">➡️ Preview →</span>
  <span class="click-hint">👆 Click anywhere on this card to open</span>
</a>

---

## 🧑‍💻 About Me

I started this website to share what I learn. If I can do it, so can you!

---

*Built with ❤️ on GitHub Pages*
<!-- ============================================ -->
<!-- EASTER EGG - Hidden Button -->
<!-- ============================================ -->

<div style="text-align:center;margin:50px 0 30px 0;padding:20px;border-radius:16px;background:rgba(0,255,65,0.03);border:1px solid rgba(0,255,65,0.1);transition:all 0.5s ease;"
     onmouseover="this.style.background='rgba(0,255,65,0.08)';this.style.borderColor='#00ff41';this.style.boxShadow='0 0 40px rgba(0,255,65,0.1)';"
     onmouseout="this.style.background='rgba(0,255,65,0.03)';this.style.borderColor='rgba(0,255,65,0.1)';this.style.boxShadow='none';">
    
    <!-- Hover hint text -->
    <div style="font-size:14px;color:#555;margin-bottom:12px;font-family:'Courier New',monospace;letter-spacing:3px;transition:all 0.3s ease;"
         onmouseover="this.style.color='#00ff41';this.style.fontSize='18px';this.textContent='🎮 CLICK HERE TO PLAY FLAPPY TUX! 🐧';" 
         onmouseout="this.style.color='#555';this.style.fontSize='14px';this.textContent='🐧 hover for secret 🐧';">
        🐧 hover for secret 🐧
    </div>
    
    <!-- Big button -->
    <a href="/easteregg/" 
       style="display:inline-block;padding:16px 45px;background:transparent;color:#00ff41;text-decoration:none;border:3px solid #00ff41;border-radius:12px;font-family:'Courier New',monospace;font-size:20px;font-weight:bold;transition:all 0.3s ease;opacity:0.4;text-transform:uppercase;letter-spacing:2px;"
       onmouseover="this.style.background='#00ff41';this.style.color='#0a0a0a';this.style.opacity='1';this.style.boxShadow='0 0 60px rgba(0,255,65,0.5)';this.style.transform='scale(1.08)';" 
       onmouseout="this.style.background='transparent';this.style.color='#00ff41';this.style.opacity='0.4';this.style.boxShadow='none';this.style.transform='scale(1)';">
        🐧 PLAY FLAPPY TUX 🐧
    </a>
</div>
