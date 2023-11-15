import styles from './Frame1.module.css';
import { Link } from 'react-router-dom';
import HospitalCard from '../components/HospitalCard';
const Frame6 = () => {
  const hospitals = [
    {
      hospName: 'A 병원',
      hospType: '권역응급의료센터',
      congest: 3,
      emBed_current: 99,
      emBed_total: 105,
      icuBed_current: 37,
      icuBed_total: 45,
      trasf_pati: 3,
      hospBed_current: 20,
      surgery_current: 3,
    },
    {
      hospName: 'B 병원',
      hospType: '권역외상센터',
      congest: 2,
      emBed_current: 50,
      emBed_total: 50,
      icuBed_current: 36,
      icuBed_total: 40,
      trasf_pati: 6,
      hospBed_current: 42,
      surgery_current: 5,
    },
    {
      hospName: 'C 병원',
      hospType: '지역의료센터',
      congest: 2,
      emBed_current: 40,
      emBed_total: 45,
      icuBed_current: 37,
      icuBed_total: 45,
      trasf_pati: 0,
      hospBed_current: 25,
      surgery_current: 2,
    },
    {
      hospName: 'D 병원',
      hospType: '일반의료센터',
      congest: 1,
      emBed_current: 32,
      emBed_total: 40,
      icuBed_current: 7,
      icuBed_total: 15,
      trasf_pati: 1,
      hospBed_current: 18,
      surgery_current: 4,
    },
    {
      hospName: 'E 병원',
      hospType: '일반외상센터',
      congest: 0,
      emBed_current: 23,
      emBed_total: 37,
      trasf_pati: 3,
      hospBed_current: 35,
      surgery_current: 4,
    },
  ];
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <div className={styles.lifelinkParent}>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />
            <div className={styles.lifelink}>LiFELiNK</div>
          </div>
          <div className={styles.hospital_listview}>
            {hospitals.map((hospital, index) => (
              <Link
                key={index}
                to={'/hospital-detail'}
                state={{ ...hospital }}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <HospitalCard {...hospital} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link to="/pati-info">
        <div className={styles.div25}>
          <div className={styles.child} />
          <div className={styles.div26}>
            <p className={styles.p}>환자</p>
            <p className={styles.p}>정보</p>
            <p className={styles.p}>입력</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Frame6;
