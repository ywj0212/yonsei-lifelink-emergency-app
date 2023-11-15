import styles from './DoctorCard.module.css';

export default function DoctorCard({ doctorName, doctorDepart }) {
  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorCard_head}>
        <div className={styles.doctorCard_name}>{doctorName}</div>
        <div className={styles.doctorCard_department}>{doctorDepart}</div>
      </div>
      <img className={styles.doctorCard_icon} alt="" src="/group-5.svg" />
    </div>
  );
}
