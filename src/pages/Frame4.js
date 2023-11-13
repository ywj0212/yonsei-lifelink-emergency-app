import { useState } from 'react';
import styles from './Frame4.module.css';
import { Link } from 'react-router-dom';

const Frame4 = () => {
  const [sex, setSex] = useState(null);
  const [birth, setBirth] = useState('');
  const [name, setName] = useState('');
  const [patiInfoList, setPatiInfoList] = useState(null);
  const onClicked = () => {
    setPatiInfoList({ name: `${name}`, birth: `${birth}`, sex: `${sex}` });
  };
  const onNameChanged = (event) => {
    setName(event.target.value);
  };
  const onBirthChanged = (event) => [setBirth(event.target.value)];

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
          <div className={styles.groupChild} />
          <div className={styles.div1}>이름</div>
          <div className={styles.groupItem}>
            <input
              className={styles.patient_name_input}
              value={name}
              onChange={onNameChanged}
            ></input>
          </div>
          <div className={styles.groupInner} />
          <div className={styles.div2}>생년월일</div>
          <div className={styles.rectangleDiv}>
            <input
              className={styles.birth_input}
              placeholder={'Ex.040718'}
              onChange={onBirthChanged}
              value={birth}
            ></input>
          </div>
          <div className={styles.groupChild1} />
          <div className={styles.div3}>성별</div>
          <div
            className={styles.groupChild2}
            style={
              sex === 'M'
                ? { backgroundColor: '#ff7979' }
                : { backgroundColor: '#e2e2e2' }
            }
            onClick={() => setSex('M')}
          />
          <div
            className={styles.div4}
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setSex('M')}
          >
            남
          </div>

          <div
            className={styles.groupChild3}
            style={
              sex === 'F'
                ? { backgroundColor: '#ff7979' }
                : { backgroundColor: '#e2e2e2' }
            }
            onClick={() => setSex('F')}
          />
          <div
            className={styles.div5}
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setSex('F')}
          >
            여
          </div>
          <Link
            to="/symptom"
            onClick={(e) => {
              if (sex == null) e.preventDefault();
              onClicked();
            }}
          >
            <img className={styles.groupIcon} alt="" src="/group-80.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
