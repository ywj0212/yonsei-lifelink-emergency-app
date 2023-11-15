import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Map.module.css';

function Map({ onUpdate, onFinalUpdate, onMidUpdate, lastList }) {
  const [localXY, setLocalXY] = useState({ x: null, y: null });
  const [xy, setXY] = useState({ x: 170, y: 416 });
  const [size, setSize] = useState({ x: 339, y: 339 });
  const [gps, setGps] = useState({ latitude: 37.38252, longitude: 126.672303 });

  const lt = { x: 37.49397985177132, y: 126.57011010000026 };
  const rb = { x: 37.32058255099964, y: 126.78518280000175 };

  const lerp = (x, y, t) => {
    return y * t + x * (1 - t);
  };

  return (
    <>
      <div
        style={{
          width: '15px',
          height: '15px',
          display: 'inline',
          borderRadius: '7.5px',
          backgroundColor: 'red',
          position: 'absolute',
          left: xy.x - 7.5,
          top: xy.y - 7.5,
          zIndex: 2,
        }}
      ></div>
      <div className={styles.div}>
        <div className={styles.inner}>
          <div className={styles.lifelinkParent}>
            <div className={styles.lifelink}>LiFELiNK</div>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />

            <p
              style={{
                color: '#ff4040',
                fontSize: 16,
                textAlign: 'center',
                width: '100%',
                position: 'absolute',
                top: 50,
              }}
            >
              위치에 따른 이송 병원 추천 시연을 위해서
              <br />
              환자 이송 위치를 지도에서 선택해주세요.
              <br />
              <small style={{ color: '#6080ff' }}>
                (GPS 이용 시 전시장 위치로만 시연 가능)
              </small>
            </p>

            <img
              src="map.png"
              alt="map"
              onClick={(e) => {
                setSize({ x: e.target.width, y: e.target.height });
                setXY({ x: e.pageX, y: e.pageY });
                setLocalXY({
                  x: e.pageX - e.target.offsetLeft,
                  y: e.pageY - e.target.offsetTop,
                });
                setGps({
                  latitude: lerp(lt.x, rb.x, localXY.x / size.x),
                  longitude: lerp(lt.y, rb.y, localXY.y / size.y),
                });
                onUpdate({
                  latitude: lerp(lt.x, rb.x, localXY.x / size.x),
                  longitude: lerp(lt.y, rb.y, localXY.y / size.y),
                });
                onMidUpdate({
                  latitude: lerp(lt.x, rb.x, localXY.x / size.x),
                  longitude: lerp(lt.y, rb.y, localXY.y / size.y),
                });
                onFinalUpdate();
              }}
              style={{
                position: 'absolute',
                margin: 0,
                top: 170,
                width: '100%',
                height: 'auto',
              }}
            />

            <Link to="/recom-hospital" state={lastList}>
              <img
                className={styles.groupItem}
                style={{ position: 'absolute', top: 540 }}
                alt=""
                src="/group-80.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
