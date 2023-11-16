import styles from './HospitalCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function HospitalCard({
  name,
  hospType,
  currentCongestion,
  emBedExists = '-',
  emBedOccupied = '-',
  icuBedExists = '-',
  icuBedOccupied = '-',
  trasferringPatient,
}) {
  return (
    <div className={styles.hospitalCard}>
      <div className={styles.card_top}>
        <div className={styles.hospitalName}>{name}</div>
        <div className={styles.hospitalType}>{hospType}</div>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_congest}>
          <div className={styles.card_congest_title}>응급실 밀집도</div>
          <div className={styles.card_congest_blocks}>
            <div
              className={`${
                currentCongestion === 3
                  ? styles.card_congest_blocks_red
                  : styles.card_congest_blocks_normal
              }`}
            >
              혼잡
            </div>
            <div
              className={`${
                currentCongestion === 2
                  ? styles.card_congest_blocks_org
                  : styles.card_congest_blocks_normal
              }`}
            >
              주의
            </div>
            <div
              className={`${
                currentCongestion === 1
                  ? styles.card_congest_blocks_yel
                  : styles.card_congest_blocks_normal
              }`}
            >
              보통
            </div>
            <div
              className={`${
                currentCongestion === 0
                  ? styles.card_congest_blocks_gre
                  : styles.card_congest_blocks_normal
              }`}
            >
              여유
            </div>
          </div>
        </div>
        <div className={styles.card_emBed}>
          <div className={styles.card_emBed_title}>응급실 병상</div>
          <div className={styles.card_emBed_number}>
            <div className={styles.card_emBed_current}>{emBedOccupied}</div>
            <div className={styles.card_emBed_total}>/{emBedExists}</div>
          </div>
        </div>
        <div className={styles.card_icuBed}>
          <div className={styles.card_icuBed_title}>중환자실 병상</div>
          <div className={styles.card_icuBed_number}>
            <div className={styles.card_icuBed_current}>{icuBedOccupied}</div>
            <div className={styles.card_icuBed_total}>/{icuBedExists}</div>
          </div>
        </div>
        <div className={styles.card_trasfPati}>
          <div className={styles.card_trasfPati_title}>이송 중인 환자</div>
          <div className={styles.card_trasfPati_number}>
            {trasferringPatient}
          </div>
          <div className={styles.card_trasfPati_myung}>명</div>
        </div>
      </div>
      <div className={styles.card_icons}>
        <div className={styles.card_icons_phone}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className={styles.card_icons_map}>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
      </div>
    </div>
  );
}
