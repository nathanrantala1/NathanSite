import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const WAVES = [
  { freq: 0.007, amp: 55, speed: 0.012, phase: 0,   opacity: 0.45 },
  { freq: 0.013, amp: 28, speed: 0.018, phase: 2.1,  opacity: 0.30 },
  { freq: 0.004, amp: 80, speed: 0.008, phase: 4.2,  opacity: 0.15 },
  { freq: 0.020, amp: 16, speed: 0.025, phase: 1.0,  opacity: 0.35 },
];

export default function SoundWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const { scrollY } = useScroll();

  const amplitudeScale = useTransform(scrollY, [0, 380], [1, 0]);
  const waveOpacity = useTransform(scrollY, [0, 290], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const scale = amplitudeScale.get();
      const opacity = waveOpacity.get();

      WAVES.forEach((wave) => {
        ctx.beginPath();
        const centerY = height / 2;

        for (let x = 0; x <= width; x += 3) {
          const y =
            centerY +
            Math.sin(x * wave.freq + time * wave.speed + wave.phase) *
              wave.amp *
              scale;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(0, 190, 148, ${wave.opacity * opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      time += 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [amplitudeScale, waveOpacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
