import logo from "@/imports/_890b16__1800_x_748_px___1700_x_400_px_.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src={logo} alt="Marvel Polymers" />
            <p className="footer-desc">Specialized polymer solutions for demanding industrial applications.</p>
          </div>
          <div>
            <h4>Products</h4>
            <a href="#/products/polyethylene">Polyethylene</a>
            <a href="#/products/polypropylene">Polypropylene</a>
            <a href="#/products/pipeline-coatings">Pipeline Coatings</a>
            <a href="#/products/engineering-thermoplastics">Engineering Thermoplastics</a>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#industries">Industries</a>
            <a href="#/products">All Products</a>
            <a href="#resources">Resources</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>operations@marvelpolymers.com</p>
            <p>+20 120 522 2901</p>
            <p>El-Nahda Industrial Zone,<br />Alexandria, Egypt</p>
          </div>
        </div>
        <div className="copyright">
          <span>© 2026 Marvel Polymers. All rights reserved.</span>
          <span>Privacy Policy &nbsp; • &nbsp; Terms &nbsp; • &nbsp; Cookie Preferences</span>
        </div>
      </div>
    </footer>
  );
}
