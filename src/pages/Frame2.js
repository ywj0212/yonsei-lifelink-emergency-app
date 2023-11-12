import styles from "./Frame2.module.css";
import { Link } from "react-router-dom";

const Frame2 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />
          <Link to="/main">
            <img className={styles.groupItem} alt="" src="/group-80.svg" />
          </Link>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.div1}>
              필요하다고 예상되는 과를 입력하세요.
            </div>
            <div className={styles.rectangleDiv} />
            <div className={styles.div2}># 정형외과 #내과</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;