import { useEffect, useRef } from 'react';

function SplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    let mouse = {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
    };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function createParticle(x: number, y: number, vx: number, vy: number) {
      const colors = ['#4299e1', '#63b3ed', '#90cdf4'];
      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      };
    }

    function updateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.98;

        if (p.alpha < 0.01) {
          particles.splice(i, 1);
          continue;
        }
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function addParticles(x: number, y: number, amount: number) {
      const angleStep = (Math.PI * 2) / amount;
      for (let i = 0; i < amount; i++) {
        const angle = i * angleStep;
        const speed = Math.random() * 2 + 1;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        particles.push(createParticle(x, y, vx, vy));
      }
    }

    function animate() {
      updateParticles();
      drawParticles();

      if (
        Math.abs(mouse.x - mouse.px) > 0.1 ||
        Math.abs(mouse.y - mouse.py) > 0.1
      ) {
        addParticles(mouse.x, mouse.y, 3);
      }

      mouse.px = mouse.x;
      mouse.py = mouse.y;

      requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
}

export default SplashCursor;