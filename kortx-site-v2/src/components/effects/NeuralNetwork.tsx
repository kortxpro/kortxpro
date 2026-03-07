"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  layer: number;
  energy: number;
  targetEnergy: number;
}

interface DataPulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

interface NeuralNetworkProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  particleColor?: string;
  accentColor?: string;
  mouseRadius?: number;
}

export function NeuralNetwork({
  className = "",
  particleCount = 110,
  connectionDistance = 170,
  particleColor = "#6366f1",
  accentColor = "#06b6d4",
  mouseRadius = 220,
}: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const pulsesRef = useRef<DataPulse[]>([]);
  const timeRef = useRef(0);
  const pulseTimerRef = useRef(0);

  const hexToRgb = useCallback((hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 99, g: 102, b: 241 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rgb = hexToRgb(particleColor);

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const initNodes = () => {
      const rect = canvas.getBoundingClientRect();
      nodesRef.current = Array.from({ length: particleCount }, () => {
        const layer = Math.random() < 0.2 ? 2 : Math.random() < 0.5 ? 1 : 0;
        const baseRadius =
          layer === 2
            ? 2.5 + Math.random() * 1.5
            : layer === 1
              ? 1.5 + Math.random() * 1
              : 1 + Math.random() * 0.5;
        return {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: baseRadius,
          baseRadius,
          pulsePhase: Math.random() * Math.PI * 2,
          layer,
          energy: 0,
          targetEnergy: 0,
        };
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const spawnPulse = (nodes: Node[]) => {
      const mouse = mouseRef.current;
      if (!mouse.active) return;

      const nearNodes: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - mouse.x;
        const dy = nodes[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius * 0.8) {
          nearNodes.push(i);
        }
      }

      if (nearNodes.length < 2) return;

      const fromIdx = nearNodes[Math.floor(Math.random() * nearNodes.length)];
      let toIdx = nearNodes[Math.floor(Math.random() * nearNodes.length)];
      let attempts = 0;
      while (toIdx === fromIdx && attempts < 5) {
        toIdx = nearNodes[Math.floor(Math.random() * nearNodes.length)];
        attempts++;
      }
      if (toIdx === fromIdx) return;

      const dx = nodes[fromIdx].x - nodes[toIdx].x;
      const dy = nodes[fromIdx].y - nodes[toIdx].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > connectionDistance) return;

      const pulseColors = [particleColor, accentColor, "#a855f7"];
      pulsesRef.current.push({
        fromIndex: fromIdx,
        toIndex: toIdx,
        progress: 0,
        speed: 0.02 + Math.random() * 0.03,
        color: pulseColors[Math.floor(Math.random() * pulseColors.length)],
      });
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      timeRef.current += 0.016;
      pulseTimerRef.current += 0.016;

      if (mouse.active && pulseTimerRef.current > 0.05) {
        pulseTimerRef.current = 0;
        spawnPulse(nodes);
      }

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > rect.width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > rect.height - 10) node.vy *= -1;
        node.x = Math.max(5, Math.min(rect.width - 5, node.x));
        node.y = Math.max(5, Math.min(rect.height - 5, node.y));

        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = 1 - dist / mouseRadius;
            node.vx += (mouse.x - node.x) * force * 0.0003;
            node.vy += (mouse.y - node.y) * force * 0.0003;
            node.targetEnergy = Math.pow(force, 1.5);
          } else {
            node.targetEnergy = 0;
          }
        } else {
          node.targetEnergy = 0;
        }

        node.energy += (node.targetEnergy - node.energy) * 0.08;
        node.vx *= 0.998;
        node.vy *= 0.998;

        const pulse = Math.sin(timeRef.current * 2 + node.pulsePhase) * 0.3;
        node.radius = node.baseRadius + pulse + node.energy * 3;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const distFade = 1 - distance / connectionDistance;
            const maxEnergy = Math.max(nodes[i].energy, nodes[j].energy);
            const avgEnergy = (nodes[i].energy + nodes[j].energy) / 2;

            const baseOpacity = distFade * 0.06;
            const energyOpacity = avgEnergy * distFade * 0.4;
            const totalOpacity = baseOpacity + energyOpacity;

            if (totalOpacity < 0.01) continue;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (maxEnergy > 0.3) {
              const gradient = ctx.createLinearGradient(
                nodes[i].x, nodes[i].y,
                nodes[j].x, nodes[j].y
              );
              gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nodes[i].energy * distFade * 0.5})`);
              gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${totalOpacity})`);
              gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${nodes[j].energy * distFade * 0.5})`);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1 + maxEnergy * 1.5;
            } else {
              ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${totalOpacity})`;
              ctx.lineWidth = 0.5;
            }

            ctx.stroke();
          }
        }
      }

      // Draw data pulses
      const pulses = pulsesRef.current;
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const fromNode = nodes[pulse.fromIndex];
        const toNode = nodes[pulse.toIndex];
        if (!fromNode || !toNode) {
          pulses.splice(p, 1);
          continue;
        }

        const px = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

        const pulseRgb = hexToRgb(pulse.color);
        const glowSize = 8;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, glowSize);
        gradient.addColorStop(0, `rgba(${pulseRgb.r}, ${pulseRgb.g}, ${pulseRgb.b}, 0.8)`);
        gradient.addColorStop(0.4, `rgba(${pulseRgb.r}, ${pulseRgb.g}, ${pulseRgb.b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${pulseRgb.r}, ${pulseRgb.g}, ${pulseRgb.b}, 0)`);

        ctx.beginPath();
        ctx.arc(px, py, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (node.energy > 0.1) {
          const glowRadius = node.radius + node.energy * 12;
          const gradient = ctx.createRadialGradient(
            node.x, node.y, node.radius * 0.5,
            node.x, node.y, glowRadius
          );
          gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${node.energy * 0.3})`);
          gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        const brightness = 0.3 + node.energy * 0.7;
        const layerAlpha =
          node.layer === 2 ? 0.9 : node.layer === 1 ? 0.6 : 0.35;
        const alpha = layerAlpha * brightness;

        if (node.energy > 0.5) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          gradient.addColorStop(0.6, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`);
          gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.5})`);
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        }

        ctx.fill();
      }

      // Mouse glow
      if (mouse.active) {
        const ringGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, mouseRadius * 0.3,
          mouse.x, mouse.y, mouseRadius
        );
        ringGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.03)`);
        ringGradient.addColorStop(0.7, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.015)`);
        ringGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fillStyle = ringGradient;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initNodes();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      resizeCanvas();
      initNodes();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, connectionDistance, particleColor, accentColor, mouseRadius, hexToRgb]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
