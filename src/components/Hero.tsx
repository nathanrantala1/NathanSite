import { motion, useScroll, useTransform } from 'framer-motion';
import "../styles/hero.css";

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  // Parallax effects for hero text
  const labelY = useTransform(scrollY, [0, 300], [0, -50]);
  const labelOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const headlineY = useTransform(scrollY, [0, 300], [0, 100]);
  const headlineScale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const headlineOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: labelY, opacity: labelOpacity }}
        >
          Sound designer • Composer
        </motion.p>
        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y: headlineY, scale: headlineScale, opacity: headlineOpacity }}
        >
          NATHAN RANTALA
        </motion.h1>
      </div>
      <motion.div className="hero-scroll-container" style={{ opacity: scrollOpacity }}>
        <div className="hero-scroll-line"></div>
        <p className="hero-scroll">SCROLL</p>
      </motion.div>
    </section>
  );
}
