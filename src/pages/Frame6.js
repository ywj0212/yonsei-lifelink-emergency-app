import styles from './Frame6.module.css';
import { Link, useLocation } from 'react-router-dom';
import HospitalCard from '../components/HospitalCard';

const Frame6 = () => {
  const location = useLocation();
  console.log(location.state);
  const newList = location.state;
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <div className={styles.lifelinkParent}>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />
            <div className={styles.lifelink}>LiFELiNK</div>
          </div>
          <div className={styles.hospital_listview}>
            {newList?.map((hospital, index) => (
                <Link
                  key={index}
                  to={'/hospital-detail'}
                  state={{ ...hospital }}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <HospitalCard
                    name={hospital.id === 0 ? (hospital.name + "★") : hospital.name}
                    hospType={hospital.hospType}
                    currentCongestion={hospital.currentCongestion}
                    emBedExists={hospital.emBedExists}
                    emBedOccupied={hospital.emBedOccupied}
                    icuBedExists={hospital.icuBedExists}
                    icuBedOccupied={hospital.icuBedOccupied}
                    trasferringPatient={hospital.trasferringPatient} />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <Link to="/pati-info">
        <div className={styles.div25}>
          <div className={styles.p}>환자</div>
          <div className={styles.p}>정보</div>
          <div className={styles.p}>입력</div>
        </div>
      </Link>
    </div>
  );
};

export default Frame6;
