import styles from './Frame1.module.css';
import { Link } from 'react-router-dom';
import HospitalCard from '../components/HospitalCard';
import Frame4 from './Frame4';

const Frame6 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <div className={styles.lifelinkParent}>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />
            <div className={styles.lifelink}>LiFELiNK</div>
          </div>
          <Link
            to="/hospital-detail"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <HospitalCard
              hospName={'수혁병원'}
              hospType={'권역응급의료센터'}
              congest={3}
              emBed_current={99}
              emBed_total={105}
              icuBed_current={37}
              icuBed_total={45}
              trasf_pati={3}
            ></HospitalCard>
          </Link>
          <Link
            to="/hospital-detail"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <HospitalCard
              hospName={'B 병원'}
              hospType={'권역외상센터'}
              congest={2}
              emBed_current={50}
              emBed_total={50}
              icuBed_current={36}
              icuBed_total={40}
              trasf_pati={6}
            ></HospitalCard>
          </Link>
          <Link
            to="/hospital-detail"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <HospitalCard
              hospName={'C 병원'}
              hospType={'지역의료센터'}
              congest={2}
              emBed_current={40}
              emBed_total={45}
              icuBed_current={37}
              icuBed_total={45}
              trasf_pati={0}
            ></HospitalCard>
          </Link>
          <Link
            to="/hospital-detail"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <HospitalCard
              hospName={'D 병원'}
              hospType={'일반의료센터'}
              congest={1}
              emBed_current={32}
              emBed_total={40}
              icuBed_current={7}
              icuBed_total={15}
              trasf_pati={1}
            ></HospitalCard>
          </Link>
          <Link
            to="/hospital-detail"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <HospitalCard
              hospName={'E 병원'}
              hospType={'일반외상센터'}
              congest={0}
              emBed_current={23}
              emBed_total={37}
              trasf_pati={3}
            ></HospitalCard>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
