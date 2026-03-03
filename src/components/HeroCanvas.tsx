"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  op: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W: number, H: number;
    let nodes: Node[] = [];
    let fr = 0;
    let animId: number;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function makeNodes() {
      nodes = [];
      for (let i = 0; i < 70; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          r: Math.random() * 1.4 + 0.4,
          op: Math.random() * 0.33 + 0.08,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      fr++;
      const g = ctx!.createRadialGradient(W * 0.65, H * 0.22, 0, W * 0.65, H * 0.22, W * 0.7);
      g.addColorStop(0, "rgba(255,255,255,.016)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, W, H);

      nodes.forEach((a, i) => {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(238,235,227,${a.op * (0.8 + 0.2 * Math.sin(fr * 0.018 + i))})`;
        ctx!.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 155) {
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(238,235,227,${(1 - d / 155) * 0.052})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    makeNodes();
    draw();

    const handleResize = () => {
      resize();
      makeNodes();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} id="hc" />;
}
