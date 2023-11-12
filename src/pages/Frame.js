import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />
          <div className={styles.lifelink}>LiFELiNK</div>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.aParent}>
            <div className={styles.a}>A 병원</div>
            <div className={styles.div1}>권역응급의료센터</div>
            <img className={styles.groupIcon} alt="" src="/group-5.svg" />
            <img className={styles.groupChild1} alt="" src="/group-6.svg" />
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.lineParent}>
            <div className={styles.groupChild2} />
            <div className={styles.groupContainer}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-2.svg"
                />
                <div className={styles.div2}>응급실 병상</div>
                <div className={styles.div3}>6</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.div4}>수술실</div>
                <div className={styles.div5}>5</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.div2}>입원실 병상</div>
                <div className={styles.div7}>54</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.div2}>중환자실 병상</div>
                <div className={styles.div3}>8</div>
              </div>
            </div>
            <div className={styles.a1}>A 권역응급의료센터 현황</div>
            <div className={styles.div10}>
              *모든 수치는 잔여 수를 기준으로 합니다
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild5} />
              <div className={styles.div11}>검색</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div12}>의료진 검색</div>
              <div className={styles.groupChild6} />
            </div>
            <div className={styles.groupParent1}>
              <div className={styles.rectangleParent2}>
                <div className={styles.groupChild7} />
                <div className={styles.div13}>윤서정</div>
                <div className={styles.div14}>응급의학과</div>
                <div className={styles.ellipseDiv} />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.rectangleParent3}>
                <div className={styles.groupChild7} />
                <div className={styles.div15}>응급의학과</div>
                <div className={styles.div16}>남도일</div>
                <div className={styles.ellipseDiv} />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.groupChild10} />
                <div className={styles.div17}>응급의학과</div>
                <div className={styles.div18}>서우진</div>
                <div className={styles.groupChild11} />
                <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.groupChild7} />
                <div className={styles.div13}>차은재</div>
                <div className={styles.div14}>응급의학과</div>
                <div className={styles.ellipseDiv} />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.rectangleParent6}>
                <div className={styles.groupChild14} />
                <img className={styles.lineIcon} alt="" src="/line-6.svg" />
                <img className={styles.icon} alt="" src="/1.svg" />
                <div className={styles.nameSearch}>name search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
