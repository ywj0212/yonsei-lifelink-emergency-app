import { useState } from "react";
import styles from "./Frame3.module.css";
import { Link } from "react-router-dom";

const Frame3 = () => {
  const [gido, setGido] = useState(null);
  
  const [isBreathing, setIsBreathing] = useState(null);
  const [breathDepth, setBreathDepth] = useState(null);

  const [bloodPressure, setBloodPressure] = useState(null);
  const [beat, setBeat] = useState(null);
  const [isBleeding, setIsBleeding] = useState(null);
  
  const [consciousness, setConsciousness] = useState(null);

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />

          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild4} />
            <div className={styles.aParent}>
              <div className={styles.a}>(A) 기도 평가</div>
              <div className={styles.groupDiv}>
                <div className={styles.groupChild5} onClick={() => setGido("open")} style={(gido === "open" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.open} style={{backgroundColor: "transparent"}} onClick={() => setGido("open")}>open</div>
                <div className={styles.groupChild6} onClick={() => setGido("patent")} style={(gido === "patent" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.patent} style={{backgroundColor: "transparent"}} onClick={() => setGido("patent")}>patent</div>
                <div className={styles.groupChild7} onClick={() => setGido("effective")} style={(gido === "effective" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.effective} style={{backgroundColor: "transparent"}} onClick={() => setGido("effective")}>effective</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild8} />
            <div className={styles.bParent}>
              <div className={styles.b}>(B) 호흡 기능 유지</div>
              <div className={styles.groupParent}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.groupChild9} onClick={() => setIsBreathing(true)} style={(isBreathing === true ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild10} onClick={() => setIsBreathing(false)} style={(isBreathing === false ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.div1}>
                    <p className={styles.p} style={{backgroundColor: "transparent"}} onClick={() => setIsBreathing(true)}>자발호흡</p>
                    <p className={styles.p} style={{backgroundColor: "transparent"}} onClick={() => setIsBreathing(false)}>여부</p>
                  </div>
                  <div className={`${styles.o} ${styles.breath_o}`}>O</div>
                  <div className={`${styles.x} ${styles.breath_x}`}>X</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div1}>
                    <p className={styles.p}>{`호흡의 `}</p>
                    <p className={styles.p}>횟수와 깊이</p>
                  </div>
                  <div className={styles.groupChild11} onClick={() => setBreathDepth("shallow")} style={(breathDepth === "shallow" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild12} onClick={() => setBreathDepth("normal")} style={(breathDepth === "normal" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.shallow} style={{backgroundColor: "transparent"}} onClick={() => setBreathDepth("shallow")} >shallow</div>
                  <div className={styles.normal} style={{backgroundColor: "transparent"}} onClick={() => setBreathDepth("normal")} >normal</div>
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
                  <div className={styles.groupChild14} onClick={() => setIsBleeding(true)} style={(isBleeding === true ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild15} onClick={() => setIsBleeding(false)} style={(isBleeding === false ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.o1} style={{backgroundColor: "transparent"}} onClick={() => setIsBleeding(true)}>O</div>
                  <div className={styles.x1} style={{backgroundColor: "transparent"}} onClick={() => setIsBleeding(false)}>X</div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div3}>혈압</div>
                  <div className={styles.groupChild16} onClick={() => setBloodPressure("고혈압")} style={(bloodPressure === "고혈압" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild17} onClick={() => setBloodPressure("정상")} style={(bloodPressure === "정상" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild18} onClick={() => setBloodPressure("저혈압")} style={(bloodPressure === "저혈압" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={`${styles.div5} ${styles.bloodpress_high}`} style={{backgroundColor: "transparent"}} onClick={() => setBloodPressure("고혈압")}>
                    고혈압
                  </div>
                  <div className={`${styles.div6} ${styles.bloodpress_normal}`} style={{backgroundColor: "transparent"}} onClick={() => setBloodPressure("정상")}>
                    정상
                  </div>
                  <div className={`${styles.div7} ${styles.bloodpress_low}`} style={{backgroundColor: "transparent"}} onClick={() => setBloodPressure("저혈압")}>
                    저혈압
                  </div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.div3}>맥박</div>
                  <div className={styles.groupChild16} onClick={() => setBeat("빈맥")} style={(beat === "빈맥" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild17} onClick={() => setBeat("정상")} style={(beat === "정상" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={styles.groupChild18} onClick={() => setBeat("서맥")} style={(beat === "서맥" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                  <div className={`${styles.div9} ${styles.pulse_low}`} style={{backgroundColor: "transparent"}} onClick={() => setBeat("빈맥")}>
                    빈맥
                  </div>
                  <div className={`${styles.div6} ${styles.pulse_normal}`} style={{backgroundColor: "transparent"}} onClick={() => setBeat("정상")}>
                    정상
                  </div>
                  <div className={`${styles.div11} ${styles.pulse_high}`} style={{backgroundColor: "transparent"}} onClick={() => setBeat("서맥")}>
                    서맥
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.groupChild23} />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.dParent}>
              <div className={styles.d}>(D) 의식 상태 판정</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupInner} onClick={() => setConsciousness("coma")} style={(consciousness === "coma" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.coma} style={{backgroundColor: "transparent"}} onClick={() => setConsciousness("coma")}>coma</div>
                <div className={styles.rectangleDiv} onClick={() => setConsciousness("semicoma")} style={(consciousness === "semicoma" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.semicoma} style={{backgroundColor: "transparent"}} onClick={() => setConsciousness("semicoma")}>semicoma</div>
                <div className={styles.groupChild1} onClick={() => setConsciousness("stupor")} style={(consciousness === "stupor" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.stupor} style={{backgroundColor: "transparent"}} onClick={() => setConsciousness("stupor")}>stupor</div>
                <div className={styles.groupChild2} onClick={() => setConsciousness("alert")} style={(consciousness === "alert" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.alert} style={{backgroundColor: "transparent"}} onClick={() => setConsciousness("alert")}>alert</div>
                <div className={styles.groupChild3} onClick={() => setConsciousness("drowsy")} style={(consciousness === "drowsy" ? {backgroundColor: "#ff7979"} : {backgroundColor: "#e2e2e2"})} />
                <div className={styles.drowsy} style={{backgroundColor: "transparent"}} onClick={() => setConsciousness("drowsy")}>drowsy</div>
              </div>
            </div>
          </div>

          <Link to="/prektas" onClick={(e) => {if (gido === null || isBreathing === null || breathDepth === null || bloodPressure === null || beat === null || isBleeding === null || consciousness === null) e.preventDefault()}}>
            <img className={styles.groupIcon} alt="" src="/group-80.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
