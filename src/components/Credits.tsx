import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/credits.css';

export default function Credits() {
  const [credits, setCredits] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}credits.txt`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        const lines = text.trim().split('\n').filter((line) => line.trim());
        setCredits(lines);
      })
      .catch((err) => console.error('Failed to load credits:', err));
  }, []);

  return (
    <ul className="credits-list">
      {credits.map((credit, index) => (
        <motion.li
          key={index}
          className="credit-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
        >
          {credit}
        </motion.li>
      ))}
    </ul>
  );
}
