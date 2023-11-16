import styles from './Frame1.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HospitalCard from '../components/HospitalCard';

const Frame1 = () => {
  const [hospitalList, setHospitalList] = useState([]);
  
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    fetch('https://lifelink-api.mirix.kr/app/gethospitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(location.state),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setHospitalList(res);
      });
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <div className={styles.lifelinkParent}>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />
            <div className={styles.lifelink}>LiFELiNK</div>
          </div>
          <div className={styles.hospital_listview}>
            {hospitalList.map((hospital, index) => (
              <Link
                key={index}
                to={'/selecthospital'}
                state={{
                  ...location.state,
                  hospital: hospital
                }}
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

export default Frame1;
