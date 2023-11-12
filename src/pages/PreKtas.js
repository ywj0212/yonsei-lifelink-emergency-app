import styles from "./PreKtas.module.css";
import { Link } from "react-router-dom";

const PreKtas = () => {
  return (
    <div className={styles.preKtas}>
      <div className={styles.preKtasInner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />
          <div className={styles.groupItem} />
          <div className={styles.preKtas1}>Pre-Ktas 등급</div>
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <b className={styles.b}>1</b>
          <b className={styles.b1}>2</b>
          <b className={styles.b2}>3</b>
          <b className={styles.b3}>4</b>
          <b className={styles.b4}>5</b>
          <Link to="/department">
            <img className={styles.groupIcon} alt="" src="/group-80.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreKtas;
