---
layout: default
title: Now
permalink: /now/
---

<style>
    .now-container {
        max-width: 700px;
        margin: 40px auto;
        padding: 20px;
        font-family: 'Courier New', monospace;
    }

    .now-container h1 {
        color: #00ff41;
        font-size: 2.5em;
        margin-bottom: 10px;
    }

    .now-container .subtitle {
        color: #808080;
        font-size: 1em;
        margin-bottom: 30px;
        border-bottom: 1px solid #1a3a1a;
        padding-bottom: 20px;
    }

    .now-item {
        border-left: 3px solid #00ff41;
        padding: 15px 20px;
        margin-bottom: 20px;
        background: rgba(0, 255, 65, 0.03);
        border-radius: 0 8px 8px 0;
        transition: all 0.3s ease;
    }

    .now-item:hover {
        background: rgba(0, 255, 65, 0.06);
        border-left-color: #ffffff;
    }

    .now-item .emoji {
        font-size: 1.5em;
        margin-right: 10px;
    }

    .now-item h3 {
        color: #00ff41;
        margin: 0 0 5px 0;
        font-size: 1.2em;
        display: inline-block;
    }

    .now-item .status {
        display: inline-block;
        font-size: 0.65em;
        background: #00ff41;
        color: #0a0a0a;
        padding: 2px 12px;
        border-radius: 20px;
        font-weight: bold;
        text-transform: uppercase;
        margin-left: 10px;
    }

    .now-item .status-hold {
        background: #ffaa00;
        color: #0a0a0a;
    }

    .now-item .status-done {
        background: #00cc66;
        color: #0a0a0a;
    }

    .now-item p {
        color: #c0c0c0;
        margin: 8px 0 0 0;
        line-height: 1.6;
    }

    .now-footer {
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid #1a3a1a;
        color: #555;
        font-size: 0.85em;
        text-align: center;
    }

    .now-footer a {
        color: #00ff41;
        text-decoration: none;
    }

    .now-footer a:hover {
        text-decoration: underline;
    }
</style>

<div class="now-container">
    <h1>📌 Now</h1>
    <div class="subtitle">What I'm currently working on — updated regularly</div>

    <!-- ============================================ -->
    <!-- NOW ITEMS                                      -->
    <!-- ============================================ -->

    <div class="now-item">
        <h3><span class="emoji">🐧</span> Dual-Boot Guide</h3>
        <span class="status">✅ Done</span>
        <p>Complete step-by-step guide for installing Linux alongside Windows. Includes both POVs and GRUB fixes.</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">🛠️</span> Arch Linux Install Guide</h3>
        <span class="status status-hold">⏳ In Progress</span>
        <p>Writing a detailed guide on installing Arch Linux from scratch — no scripts, just terminal.</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">🔧</span> Fix GRUB Bootloader</h3>
        <span class="status status-hold">⏳ In Progress</span>
        <p>Writing a rescue guide for when Windows overwrites GRUB and you can't boot into Linux.</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">🔍</span> Search Bar</h3>
        <span class="status">✅ Done</span>
        <p>Added a full-site search to help visitors find guides quickly.</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">🌓</span> Theme Switcher</h3>
        <span class="status">✅ Done</span>
        <p>Dark/light theme toggle with floating button and saved preferences.</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">🐧</span> Flappy Tux Game</h3>
        <span class="status">✅ Done</span>
        <p>Hidden Easter egg game — Flappy Bird with Tux the penguin!</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">📱</span> PWA / Mobile App</h3>
        <span class="status status-hold">⏳ In Progress</span>
        <p>Turning this site into a Progressive Web App so it works offline and can be installed on phones.</p>
    </div>

    <div class="now-item">
        <h3><span class="emoji">🤖</span> AI Chatbot</h3>
        <span class="status status-hold">⏳ In Progress</span>
        <p>Adding a floating AI assistant that answers questions about my guides and Linux.</p>
    </div>

    <div class="now-footer">
        <p>💡 This page is updated regularly — check back to see what's new!</p>
        <p>⬅️ <a href="/">Back to Home</a></p>
    </div>
</div>
