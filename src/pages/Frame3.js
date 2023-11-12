import styles from "./Frame3.module.css";
import { Link } from "react-router-dom";

const Frame3 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.dParent}>
              <div className={styles.d}>(D) 의식 상태 판정</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupInner} />
                <div className={styles.coma}>coma</div>
                <div className={styles.rectangleDiv} />
                <div className={styles.semicoma}>semicoma</div>
                <div className={styles.groupChild1} />
                <div className={styles.stupor}>stupor</div>
                <div className={styles.groupChild2} />
                <div className={styles.alert}>alert</div>
                <div className={styles.groupChild3} />
                <div className={styles.drowsy}>drowsy</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild4} />
            <div className={styles.aParent}>
              <div className={styles.a}>(A) 기도 평가</div>
              <div className={styles.groupDiv}>
                <div className={styles.groupChild5} />
                <div className={styles.groupChild6} />
                <div className={styles.groupChild7} />
                <button className={styles.open}>open</button>
                <button className={styles.patent}>patent</button>
                <div className={styles.effective}>effective</div>
              </div>
            </div>
          </div>
          <Link to="/prektas">
            <img className={styles.groupIcon} alt="" src="/group-80.svg" />
          </Link>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild8} />
            <div className={styles.bParent}>
              <div className={styles.b}>(B) 호흡 기능 유지</div>
              <div className={styles.groupParent}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.groupChild9} />
                  <div className={styles.groupChild10} />
                  <div className={styles.div1}>
                    <p className={styles.p}>자발호흡</p>
                    <p className={styles.p}>여부</p>
                  </div>
                  <div className={styles.o}>O</div>
                  <div className={styles.x}>X</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>
                    <p className={styles.p}>{`호흡의 `}</p>
                    <p className={styles.p}>횟수와 깊이</p>
                  </div>
                  <div className={styles.groupChild11} />
                  <div className={styles.groupChild12} />
                  <div className={styles.shallow}>shallow</div>
                  <div className={styles.normal}>normal</div>
                </div>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild13} />
            <div className={styles.cParent}>
              <div className={styles.c}>(C) 순환 기능 유지</div>
              <div className={styles.groupContainer}>
                <div className={styles.group}>
                  <div className={styles.div3}>출혈</div>
                  <div className={styles.groupChild14} />
                  <div className={styles.groupChild15} />
                  <div className={styles.o1}>O</div>
                  <div className={styles.x1}>X</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div3}>혈압</div>
                  <div className={styles.groupChild16} />
                  <div className={styles.groupChild17} />
                  <div className={styles.groupChild18} />
                  <div className={styles.div5}>고혈압</div>
                  <div className={styles.div6}>정상</div>
                  <div className={styles.div7}>저혈압</div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.div3}>맥박</div>
                  <div className={styles.groupChild16} />
                  <div className={styles.groupChild17} />
                  <div className={styles.groupChild18} />
                  <div className={styles.div9}>빈맥</div>
                  <div className={styles.div6}>정상</div>
                  <div className={styles.div11}>서맥</div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.groupChild23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
