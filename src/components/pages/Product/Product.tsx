import Button from "../../ui/Button";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <section id="product">
      <h2 className="text-center my-3">Pilihan Mobil</h2>
      <div className={styles.product}>
        <div className="col-lg-3">
          <div className={styles.productBody}>
            <h3>Avanza New</h3>
            <p className="bg-black text-white">Rp120.00</p>
            <img src="product1.png" alt="" />
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <Button className={styles.btn}>Pesan Sekarang</Button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styles.productBody}>
            <h3>Avanza New</h3>
            <p className="bg-black text-white">Rp120.00</p>
            <img src="product1.png" alt="" />
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <Button className={styles.btn}>Pesan Sekarang</Button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styles.productBody}>
            <h3>Avanza New</h3>
            <p className="bg-black text-white">Rp120.00</p>
            <img src="product1.png" alt="" />
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <Button className={styles.btn}>Pesan Sekarang</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
