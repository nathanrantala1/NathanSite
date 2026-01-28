import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/works.css';

interface Work {
  id: number;
  title: string;
  embedUrl: string;
}

function parseVideoUrl(url: string): string {
  // YouTube: youtube.com/watch?v=ID, youtu.be/ID
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo: vimeo.com/ID
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return url;
}

export default function Works() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}works.txt`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        const lines = text.trim().split('\n').filter((line) => line.trim());
        const parsed = lines.map((line, index) => {
          const [title, url] = line.split('|').map((s) => s.trim());
          return {
            id: index + 1,
            title: title || '',
            embedUrl: parseVideoUrl(url || ''),
          };
        });
        setWorks(parsed);
      })
      .catch((err) => console.error('Failed to load works:', err));
  }, []);

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
          <div className="work-video">
            <iframe
              src={work.embedUrl}
              title={work.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="work-caption">{work.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
