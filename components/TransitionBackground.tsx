"use client";
import React, { useEffect, useRef } from 'react';

export const TransitionBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class - circular blobs
    class Blob {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 60;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.06 + 0.03;
        this.pulseSpeed = Math.random() * 0.012 + 0.006;
        this.pulsePhase = Math.random() * Math.PI * 2;
        
        // More balanced color distribution - less yellow, more teal/purple
        const colors = [
          '#487AFA', // Blue
          '#487AFA', // Blue (weighted)
          '#23C0AD', // Teal
          '#23C0AD', // Teal (weighted)
          '#9945FF', // Purple
          '#9945FF', // Purple (weighted)
          '#14F195', // Green
          '#F1E821', // Yellow (only one instance)
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulsePhase += this.pulseSpeed;

        // Wrap around screen
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
      }

      draw() {
        if (!ctx) return;
        
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 1;
        const currentRadius = this.radius * pulse;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;

        // Create glowing blob
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius
        );
        
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.4, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Wave particles - small dots that create flowing effect
    class WaveParticle {
      x: number;
      y: number;
      baseY: number;
      size: number;
      speed: number;
      amplitude: number;
      frequency: number;
      phase: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.y = this.baseY;
        this.size = Math.random() * 1.2 + 0.6;
        this.speed = Math.random() * 0.3 + 0.1;
        this.amplitude = Math.random() * 20 + 10;
        this.frequency = Math.random() * 0.012 + 0.006;
        this.phase = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.25 + 0.1;
        
        const colors = ['#487AFA', '#23C0AD', '#9945FF', '#14F195'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speed;
        this.phase += this.frequency;
        this.y = this.baseY + Math.sin(this.phase) * this.amplitude;

        if (this.x > canvas.width + 10) {
          this.x = -10;
          this.baseY = Math.random() * canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create blobs - even fewer for ultra-clean look
    const blobs: Blob[] = [];
    for (let i = 0; i < 4; i++) {
      blobs.push(new Blob());
    }

    // Create wave particles - minimal for cleaner aesthetic
    const waveParticles: WaveParticle[] = [];
    for (let i = 0; i < 8; i++) {
      waveParticles.push(new WaveParticle());
    }

    // Ambient glow effect - very subtle
    const drawAmbientGlow = () => {
      if (!ctx) return;

      // Subtle corner glows
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.15,
        canvas.height * 0.2,
        0,
        canvas.width * 0.15,
        canvas.height * 0.2,
        450
      );
      glow1.addColorStop(0, 'rgba(35, 192, 173, 0.025)');
      glow1.addColorStop(1, 'rgba(35, 192, 173, 0)');
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.85,
        canvas.height * 0.8,
        0,
        canvas.width * 0.85,
        canvas.height * 0.8,
        400
      );
      glow2.addColorStop(0, 'rgba(153, 69, 255, 0.02)');
      glow2.addColorStop(1, 'rgba(153, 69, 255, 0)');
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      // Stronger fade for cleaner trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawAmbientGlow();

      // Draw wave particles first (background layer)
      waveParticles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw blobs (foreground layer)
      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction - gentle repulsion
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      blobs.forEach(blob => {
        const dx = blob.x - mouseX;
        const dy = blob.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          blob.x += (dx / distance) * force * 3;
          blob.y += (dy / distance) * force * 3;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-opacity duration-1000"
      style={{ 
        background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 50%, #000814 100%)',
        opacity: 1
      }}
    />
  );
};

export default TransitionBackground;