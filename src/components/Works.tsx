import { motion } from 'framer-motion';
import '../styles/works.css';

export default function Works() {
  const works = [
    { id: 1, title: 'Project One' },
    { id: 2, title: 'Project Two' },
    { id: 3, title: 'Project Three' },
    { id: 4, title: 'Project Four' },
    { id: 5, title: 'Project Five' },
    { id: 6, title: 'Project Six' },
  ];

  return (
    <div className="works-grid">
      {works.map((work, index) => (
        <motion.div
          key={work.id}
          className="work-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        >
          <div className="work-placeholder">
            <p>{work.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
