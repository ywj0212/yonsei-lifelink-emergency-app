import styles from "./PreKtas.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const PreKtas = () => {
  const [preKtas, setPreKtas] = useState(null);

  return (
    <div className={styles.preKtas}>
      <div className={styles.preKtasInner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />
          <div className={styles.groupItem} />
          <div className={styles.preKtas1}>Pre-Ktas 등급</div>
          <div
            className={styles.groupInner}
            style={
              preKtas === 1
                ? { backgroundColor: "#ff7979" }
                : { backgroundColor: "#e2e2e2" }
            }
            onClick={() => setPreKtas(1)}
          />
          <div
            className={styles.rectangleDiv}
            style={
              preKtas === 2
                ? { backgroundColor: "#ff7979" }
                : { backgroundColor: "#e2e2e2" }
            }
            onClick={() => setPreKtas(2)}
          />
          <div
            className={styles.groupChild1}
            style={
              preKtas === 3
                ? { backgroundColor: "#ff7979" }
                : { backgroundColor: "#e2e2e2" }
            }
            onClick={() => setPreKtas(3)}
          />
          <div
            className={styles.groupChild2}
            style={
              preKtas === 5
                ? { backgroundColor: "#ff7979" }
                : { backgroundColor: "#e2e2e2" }
            }
            onClick={() => setPreKtas(5)}
          />
          <div
            className={styles.groupChild3}
            style={
              preKtas === 4
                ? { backgroundColor: "#ff7979" }
                : { backgroundColor: "#e2e2e2" }
            }
            onClick={() => setPreKtas(4)}
          />
          <b className={styles.b}>1</b>
          <b className={styles.b1}>2</b>
          <b className={styles.b2}>3</b>
          <b className={styles.b3}>4</b>
          <b className={styles.b4}>5</b>
          <Link
            to="/department"
            onClick={(e) => {
              if (preKtas == null) e.preventDefault();
            }}
          >
            <img className={styles.groupIcon} alt="" src="/group-80.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreKtas;
