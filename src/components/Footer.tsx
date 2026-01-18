import "../styles/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>NATHAN RANTALA</p>
        <button onClick={scrollToTop} className="back-to-top">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
