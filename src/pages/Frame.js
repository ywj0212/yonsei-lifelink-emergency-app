import styles from './Frame.module.css';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DoctorCard from '../components/DoctorCard';

const Frame = () => {
  const location = useLocation();
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
                  {location.state.hospName}
                </div>
                <div className={styles.top_title_hospType}>
                  {location.state.hospType}
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
                {location.state.hospName} {location.state.hospType} 현황
              </div>
              <div className={styles.body_cards}>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>응급실 병상</div>
                  <div className={styles.body_card_number}>
                    {location.state.emBed_current}
                  </div>
                </div>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>입원실 병상</div>
                  <div className={styles.body_card_number}>
                    {location.state.hospBed_current}
                  </div>
                </div>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>중환자실 병상</div>
                  <div className={styles.body_card_number}>
                    {location.state.icuBed_current}
                  </div>
                </div>
                <div className={styles.body_card}>
                  <div className={styles.body_card_title}>수술실 빈방</div>
                  <div className={styles.body_card_number}>
                    {location.state.surgery_current}
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

export default Frame;
