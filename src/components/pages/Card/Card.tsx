import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div>
            <p className="text-center mb-0 fw-semibold">Fasilitas</p>
            <h2 className="text-center">Kenapa Memilih Kami?</h2>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.card}>
              <FontAwesomeIcon icon={faLocationDot} size="4x" className="text-center" />
              <h3>Jemput di Lokasi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.card}>
              <FontAwesomeIcon icon={faLocationDot} size="4x" className="text-center" />
              <h3>Jemput di Lokasi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.card}>
              <FontAwesomeIcon icon={faLocationDot} size="4x" className="text-center" />
              <h3>Jemput di Lokasi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.card}>
              <FontAwesomeIcon icon={faLocationDot} size="4x" className="text-center" />
              <h3>Jemput di Lokasi</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
