import React from "react";


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Trump Tower — Demo Clone</div>
        <div className="footer-links">
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
      </div>
    </footer>
  );
}
