// ============================================
// MATRIX RAIN BACKGROUND EFFECT
// ============================================

(function() {
    // Canvas setup
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = [];

    function init() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        columns = Math.floor(width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }
    }

    init();

    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            // Random brightness variation
            const brightness = Math.random() > 0.975 ? '#ffffff' : '#00ff41';
            ctx.fillStyle = brightness;
            ctx.fillText(char, x, y);

            if (y > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let interval = setInterval(draw, 33);

    // Handle resize
    window.addEventListener('resize', function() {
        clearInterval(interval);
        init();
        interval = setInterval(draw, 33);
    });

    // Handle page visibility (pause when tab is hidden)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            clearInterval(interval);
        } else {
            interval = setInterval(draw, 33);
        }
    });
})();
