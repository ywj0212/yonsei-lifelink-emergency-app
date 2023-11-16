import styles from './Frame1.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import HospitalCard from '../components/HospitalCard';
const Frame6 = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <div className={styles.lifelinkParent}>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />
            <div className={styles.lifelink}>LiFELiNK</div>
          </div>
          <div className={styles.hospital_listview}>
            {location.state.map((hospital, index) => (
              <Link
                key={index}
                to={'/selecthospital'}
                state={{... hospital}}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
