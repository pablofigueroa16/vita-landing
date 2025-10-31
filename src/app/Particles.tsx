"use client";
import React, { useEffect, useRef } from "react";

type ParticlesProps = {
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleBaseSize?: number;
  moveParticlesOnHover?: boolean;
  alphaParticles?: boolean;
  disableRotation?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
};

export default function Particles({
  particleColors = ["#ffffff"],
  particleCount = 120,
  particleSpread = 8,
  speed = 0.12,
  particleBaseSize = 80,
  moveParticlesOnHover = true,
  alphaParticles = true,
  disableRotation = true, // not used
  className,
  style,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    setSize();

    // Initialize particles
    const N = Math.max(10, particleCount);
    const spread = Math.max(1, particleSpread);
    const base = Math.max(4, particleBaseSize);
    const particles: Particle[] = new Array(N).fill(0).map(() => {
      const r = base * (0.02 + Math.random() * 0.05); // scale base to reasonable radius
      const color = particleColors[Math.floor(Math.random() * particleColors.length)] || "#ffffff";
      const alpha = alphaParticles ? 0.12 + Math.random() * 0.25 : 1;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() * 2 - 1) * spread,
        vy: (Math.random() * 2 - 1) * spread,
        r,
        color,
        alpha,
      };
    });
    particlesRef.current = particles;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };
    if (moveParticlesOnHover) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
    }

    const onResize = () => {
      setSize();
    };
    window.addEventListener("resize", onResize);

    const step = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        // Mouse influence
        if (moveParticlesOnHover && mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const pull = Math.min(0.0025, 0.6 / (dist + 80));
          p.vx += dx * pull;
          p.vy += dy * pull;
        }

        // Update position
        p.x += p.vx * speed;
        p.y += p.vy * speed;

        // Bounce on edges
        if (p.x < -p.r) { p.x = -p.r; p.vx *= -0.9; }
        if (p.y < -p.r) { p.y = -p.r; p.vy *= -0.9; }
        if (p.x > canvas.width + p.r) { p.x = canvas.width + p.r; p.vx *= -0.9; }
        if (p.y > canvas.height + p.r) { p.y = canvas.height + p.r; p.vy *= -0.9; }

        // Draw particle (soft glow circle)
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grd.addColorStop(0, p.color);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      if (moveParticlesOnHover) {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [particleColors, particleCount, particleSpread, speed, particleBaseSize, moveParticlesOnHover, alphaParticles]);

  return (
    <div
      aria-hidden
      className={className}
      style={{ position: "absolute", inset: 0, ...style }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}