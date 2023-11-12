import styles from "./Transiting.module.css";

const Transiting = () => {
  return (
    <div className={styles.div}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-41.svg" />
        <div className={styles.lifelink}>LiFELiNK</div>
      </div>
      <div className={styles.message}>이송중입니다!</div>
      <button className={styles.button}>이송 중단하기</button>
    </div>
  );
};

export default Transiting;
