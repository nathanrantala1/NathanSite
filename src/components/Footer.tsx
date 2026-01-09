import "../styles/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 NATHAN RANTALA. All rights reserved.</p>
        <button onClick={scrollToTop} className="back-to-top">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
