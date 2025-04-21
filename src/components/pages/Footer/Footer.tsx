import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="vite.svg" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className={styles.kontak}>
          <h3>Kontak Kami</h3>
          <p>admin@gmail.com</p>
          <p>+12345778</p>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className={styles.layanan}>
          <h3>Layanan Kami</h3>
          <p>Sewa Mobil + Supir</p>
          <p>Sewa Mobil</p>
          <p>Sewa Motor</p>
        </div>
      </div>
      <div>
        <h6 className="text-center">copyright &copy;2025</h6>
      </div>
    </footer>
  );
};

export default Footer;
