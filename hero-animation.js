/**
 * The Degree — Luxury Atelier Hero Animation
 * Smooth Mouse/Touch Parallax, Floating Micro-Particles, and Interactive Hotspots
 */

(function () {
  'use strict';

  function initHeroAnimation() {
    const hero = document.getElementById('heroSection');
    const stage = document.getElementById('heroStage');
    const hotspots = document.getElementById('heroHotspots');
    const canvas = document.getElementById('heroParticlesCanvas');

    if (!hero || !stage) return;

    // ----------------------------------------------------
    // 1. SMOOTH MOUSE / GYROSCOPE PARALLAX
    // ----------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = nx * 22; // max tilt offset in px
      mouseY = ny * 16;
      isMoving = true;
    });

    hero.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
      isMoving = false;
    });

    function renderParallax() {
      // Smooth lerp damping
      currentX += (mouseX - currentX) * 0.055;
      currentY += (mouseY - currentY) * 0.055;

      stage.style.transform = `scale(1.045) translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      if (hotspots) {
        hotspots.style.transform = `translate3d(${(currentX * 1.25).toFixed(2)}px, ${(currentY * 1.25).toFixed(2)}px, 0)`;
      }

      requestAnimationFrame(renderParallax);
    }
    renderParallax();

    // ----------------------------------------------------
    // 2. FLOATING GOLDEN DUST & SPARKLES CANVAS
    // ----------------------------------------------------
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let particles = [];
      let animId = null;

      function resizeCanvas() {
        if (!canvas) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Create 45 delicate golden ambient dust particles
      const count = 45;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * (canvas.width || 1200),
          y: Math.random() * (canvas.height || 700),
          r: Math.random() * 2.2 + 0.8,
          alpha: Math.random() * 0.55 + 0.15,
          speedY: Math.random() * 0.35 + 0.12,
          speedX: (Math.random() - 0.5) * 0.22,
          pulse: Math.random() * Math.PI * 2
        });
      }

      function animateParticles() {
        if (!ctx || !canvas.width || !canvas.height) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y -= p.speedY;
          p.x += p.speedX;
          p.pulse += 0.025;

          if (p.y < -15) p.y = canvas.height + 15;
          if (p.x < -15) p.x = canvas.width + 15;
          if (p.x > canvas.width + 15) p.x = -15;

          const currentAlpha = Math.max(0.05, p.alpha * (0.6 + Math.sin(p.pulse) * 0.4));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 188, 128, ${currentAlpha.toFixed(2)})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(214, 178, 114, 0.65)';
          ctx.fill();
        }

        animId = requestAnimationFrame(animateParticles);
      }
      animateParticles();
    }

    // ----------------------------------------------------
    // 3. INTERACTIVE HOTSPOTS NAVIGATION
    // ----------------------------------------------------
    document.querySelectorAll('.atelier-spot').forEach(spot => {
      spot.addEventListener('click', () => {
        // Smoothly scroll down to atelier showcase or collection page
        const atelierSection = document.getElementById('signature');
        if (atelierSection) {
          atelierSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimation);
  } else {
    initHeroAnimation();
  }
})();
