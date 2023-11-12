import styles from "./Transiting.module.css";
import { Link } from "react-router-dom";

const Transiting = () => {
  return (
    <>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-41.svg" />
        <div className={styles.lifelink}>LiFELiNK</div>
      </div>
      <div className={styles.div}>

        <p className={styles.text} style={{ top: 80 }}>환자 등록이 완료되었습니다!</p>
        <h2 className={styles.text} style={{ top: 120 }}>결정한 병원으로<br/>환자를 이송 중입니다...</h2>

        <Link to="/main">
          <div className={styles.button}>이송을 중단하고 메인 메뉴로 돌아가기</div>
        </Link>
        
      </div>
    </>
  );
};

export default Transiting;
