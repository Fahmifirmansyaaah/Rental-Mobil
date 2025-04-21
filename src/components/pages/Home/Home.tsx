import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../Navbar";
import Card from "../Card";
import Product from "../Product";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faHouse, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <main>
      <Navbar />

      <section className={styles.hero} id="home">
        <div className={styles.container}>
          <div className={styles.info} data-aos="fade-up">
            <h1>This is Heading</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In culpa tenetur iure sequi saepe labore velit ipsum unde quaerat temporibus. Sit maxime modi vero ex hic porro provident
              exercitationem adipisci.
            </p>
            <a href="">Hubungi Saya</a>
          </div>
        </div>
      </section>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <FontAwesomeIcon icon={faClock} size="3x" />
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBody}>
            <FontAwesomeIcon icon={faMoneyBillWave} size="3x" className={styles.icon} />
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBody}>
            <FontAwesomeIcon icon={faHouse} size="3x" />
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <FontAwesomeIcon icon={faCalendarDays} size="3x" />
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>

      <section className="container">
        <div className={styles.about} data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6">
              <img src="hero-section.jpg" alt="img-fluid" />
            </div>
            <div className="col-lg-4 mt-4">
              <h2>Pilihan Pertama Rental Mobil Anda</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium totam est voluptatibus. Doloremque impedit consectetur veritatis obcaecati ipsum illum?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fugiat itaque odio deleniti minima cupiditate iste at dicta doloribus aperiam?</p>
            </div>
          </div>
        </div>
      </section>

      <Card />
      <Product />
      <section className={styles.bg}>
        <div className={styles.cta}>
          <div className="row">
            <div className="col-xl-6">
              <h2 className="mb-4">
                Hubungi Sekarang dan <br /> Pesan Mobil Anda
              </h2>

              <a href="">
                <FontAwesomeIcon icon={faWhatsapp} size="xl" className={styles.icon} />
                Hubungi Kami
              </a>
            </div>
            <div className="col-xl-6">
              <img src="product1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
