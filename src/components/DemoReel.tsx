import "../styles/demoreel.css";

export default function DemoReel() {
  return (
    <div className="demo-reel">
      <div className="video-placeholder">
        <iframe
          src="https://www.youtube.com/embed/Fo-s3UjHY-Q?si=5Y6gMl46pHSVLA0A"
          title="Sound Design Demo Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
