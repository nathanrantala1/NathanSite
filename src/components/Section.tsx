import { motion } from 'framer-motion';
import '../styles/section.css';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Section({ id, title, children, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className={`section-container ${fullWidth ? 'section-full-width' : ''}`}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
