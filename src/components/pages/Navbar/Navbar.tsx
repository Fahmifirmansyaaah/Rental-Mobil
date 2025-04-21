import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src="vite.svg" alt="Logo" className="img-fluid" />
          </a>
        </div>

        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
