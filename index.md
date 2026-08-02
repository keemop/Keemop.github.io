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

I'm **Keemop**, a 12-year-old who loves computers, coding, and tinkering with operating systems. This is my collection of guides to help other beginners!

---

## 📚 My Tech Guides

<a href="/dual_booting" class="guide-card">
  <h3>🐧 Dual-Boot Windows 10 and Linux <span class="badge">✅ Ready</span></h3>
  <p>Step-by-step guide for installing Linux alongside Windows (or Windows alongside Linux!). Includes both POVs and how to fix GRUB when it breaks.</p>
  <span class="arrow">➡️ Read Full Guide →</span>
  <span class="click-hint">👆 Click anywhere on this card to open</span>
</a>

<a href="/arch_install" class="guide-card">
  <h3>🛠️ Install Arch Linux (The Hard Way) <span class="badge badge-soon">⏳ Coming Soon</span></h3>
  <p>Learn how to install Arch Linux from scratch—no automated scripts, just pure terminal and patience.</p>
  <span class="arrow">➡️ Preview →</span>
  <span class="click-hint">👆 Click anywhere on this card to open</span>
</a>

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
