import styles from './SelectHospital.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DoctorCard from '../components/DoctorCard';

const SelectHospital = () => {
  const location = useLocation();

  const [transInfo, setTransInfo] = useState({});
  const [isTrans, setIsTrans] = useState(false);
  const [ranValue1, setRanValue1] = useState(0);
  const [ranValue2, setRanValue2] = useState(0);
  const [ranValue3, setRanValue3] = useState(0);
  const [ranValue4, setRanValue4] = useState(0);

  const [patientId, setPatientId] = useState(null);

  const getClassNameBasedOnValue = (value) => {
    if (value >= 0.75) {
      return styles.colorLimegreen;
    } else if (value >= 0.5) {
      return styles.colorKhaki;
    } else if (value >= 0.25) {
      return styles.colorDarkorange;
    } else {
      return styles.colorRed;
    }
  };
  const onClicked = () => {
    setIsTrans((prev) => !prev);
  };
  useEffect(() => {
    if (isTrans) {
      fetch('https://lifelink-api.mirix.kr/app/setdestination', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...location.state,
          hospitalId: location.state.hospital.id
        }),
      })
        .then((res) => res.json())
        .then((res) => setPatientId(res.patientId));
    } else {
      fetch('https://lifelink-api.mirix.kr/app/stoptransfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: patientId,
          hospitalId: location.state.hospital.id
        }),
      })
    }
  }, [isTrans]);

  useEffect(() => {
    setRanValue1(Math.random());
    setRanValue2(Math.random());
    setRanValue3(Math.random());
    setRanValue4(Math.random());
  }, []);
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.phone_frame}>
          <div className={styles.lifelink}>
            <img className={styles.lifelink_icon} alt="" src="/group-4.svg" />
            <div className={styles.lifelink_title}>LiFELiNK</div>
          </div>
          <div className={styles.hospital_detail}>
            <div className={styles.hospital_detail_top}>
              <div className={styles.top_title}>
                <div className={styles.top_title_hospName}>
                  {location.state.hospital.name}
                </div>
                <div className={styles.top_title_hospType}>
                  {location.state.hospital.hospType}
                </div>
              </div>
              <div className={styles.top_icons}>
                <img
                  className={styles.top_icons_call}
                  alt=""
                  src="/group-5.svg"
                />
                <img
                  className={styles.top_icons_map}
                  alt=""
                  src="/group-6.svg"
                />
              </div>
            </div>
            <div className={styles.hospital_detail_linebox}>
              <div className={styles.hospital_detail_line}> </div>
            </div>
            <div className={styles.hospital_detail_body}>
              <div className={styles.body_title}>
                {location.state.hospital.name} {location.state.hospital.hospType} 현황
              </div>
              <div className={styles.body_cards}>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>응급실 병상</div>
                  <div
                    className={`${
                      styles.body_card_number
                    } ${getClassNameBasedOnValue(
                      location.state.hospital.emBedExists / location.state.hospital.emBedOccupied
                    )}`}
                  >
                    {location.state.hospital.emBedExists}
                  </div>
                </div>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>입원실 병상</div>
                  <div
                    className={`${
                      styles.body_card_number
                    } ${getClassNameBasedOnValue(ranValue3)}`}
                  >
                    {Math.floor(ranValue1 * 50)}
                  </div>
                </div>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>중환자실 병상</div>
                  <div
                    className={`${
                      styles.body_card_number
                    } ${getClassNameBasedOnValue(
                      location.state.hospital.icuBedExists /
                        location.state.hospital.icuBedOccupied
                    )}`}
                  >
                    {location.state.hospital.icuBedExists}
                  </div>
                </div>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>수술실 빈방</div>
                  <div
                    className={`${
                      styles.body_card_number
                    } ${getClassNameBasedOnValue(ranValue4)}`}
                  >
                    {Math.floor(ranValue2 * 10)}
                  </div>
                </div>
              </div>
              <div className={styles.body_notification}>
                *모든 수치는 잔여 수를 기준으로 합니다
              </div>
            </div>
            <div className={styles.hospital_detail_linebox}>
              <div className={styles.hospital_detail_line}> </div>
            </div>
            <div className={styles.hospital_detail_bottom}>
              <div className={styles.transInfo_table}>
                <div
                  className={`${styles.trans_trigger} ${
                    isTrans
                      ? styles.trans_trigger_red
                      : styles.trans_trigger_blue
                  }`}
                  onClick={onClicked}
                >
                  {isTrans ? '이송 중단' : '이송병원확정'}
                </div>
                {isTrans ? null : (
                  <div className={styles.time}>
                    {transInfo?.estimatedArrival}
                  </div>
                )}
              </div>
              <div className={styles.bottom_title}>의료진 검색</div>
              <div className={styles.bottom_search}>
                <div className={styles.bottom_search_inputbox}>
                  <FontAwesomeIcon
                    className={styles.bottom_search_icon}
                    icon={faMagnifyingGlass}
                    size="xl"
                  />
                  <input className={styles.bottom_search_input}></input>
                </div>
                <div className={styles.bottom_search_button}>검색</div>
              </div>
              <div className={styles.bottom_listview}>
                <DoctorCard doctorName={'윤서정'} doctorDepart={'응급의학과'} />
                <DoctorCard doctorName={'남도일'} doctorDepart={'응급의학과'} />
                <DoctorCard doctorName={'서우진'} doctorDepart={'응급의학과'} />
                <DoctorCard doctorName={'차은재'} doctorDepart={'응급의학과'} />
                <DoctorCard doctorName={'차은재'} doctorDepart={'응급의학과'} />
                <DoctorCard doctorName={'차은재'} doctorDepart={'응급의학과'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectHospital;
