import styles from "./Frame6.module.css";
import { Link } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";

const Frame6 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.groupParent}>
          <div className={styles.lifelinkParent}>
            <div className={styles.lifelink}>LiFELiNK</div>
            <img className={styles.groupChild} alt="" src="/group-4.svg" />
          </div>
          <Link to="/hospital-detail">
            <div className={styles.a}>
              <div className={styles.aChild} />
              <div className={styles.a1}>A 병원</div>
              <div className={styles.div1}>권역응급의료센터</div>
              <img className={styles.aItem} alt="" src="/group-5.svg" />
              <img className={styles.aInner} alt="" src="/group-6.svg" />
              <div className={styles.parent}>
                <div className={styles.div2}>
                  <p className={styles.p}>{`응급실 밀집도 `}</p>
                  <p className={styles.p}>응급실 병상</p>
                  <p className={styles.p}>중환자실 병상</p>
                  <p className={styles.p}>{`이송 중인 환자 `}</p>
                </div>
                <div className={styles.div3}>
                  <p className={styles.p}>
                    <span className={styles.span}>99</span>
                    <span>/105</span>
                  </p>
                  <p className={styles.p}>
                    <span className={styles.span}>37</span>
                    <span>/45</span>
                  </p>
                  <p className={styles.p6}>
                    <span>3</span>
                    <span className={styles.span2}>명</span>
                  </p>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.wrapper}>
                    <div className={styles.div4}>혼잡</div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.container}>
                    <b className={styles.b}>주의</b>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.container}>
                    <b className={styles.b}>보통</b>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.container}>
                    <b className={styles.b}>여유</b>
                  </div>
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div2}>
                  <p className={styles.p}>{`응급실 밀집도 `}</p>
                  <p className={styles.p}>응급실 병상</p>
                  <p className={styles.p}>중환자실 병상</p>
                  <p className={styles.p}>{`이송 중인 환자 `}</p>
                </div>
                <div className={styles.div3}>
                  <p className={styles.p}>
                    <span className={styles.span}>99</span>
                    <span>/105</span>
                  </p>
                  <p className={styles.p}>
                    <span className={styles.span}>37</span>
                    <span>/45</span>
                  </p>
                  <p className={styles.p6}>
                    <span>3</span>
                    <span className={styles.span2}>명</span>
                  </p>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.wrapper}>
                    <div className={styles.div4}>혼잡</div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.container}>
                    <b className={styles.b}>주의</b>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.container}>
                    <b className={styles.b}>보통</b>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.container}>
                    <b className={styles.b}>여유</b>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <HospitalCard
            hospName={"수혁병원"}
            hospType={"권역응급의료센터"}
            congest={3}
            emBed_current={99}
            emBed_total={105}
            icuBed_current={37}
            icuBed_total={45}
            trasf_pati={3}
          ></HospitalCard>
          <div className={styles.b6}>
            <div className={styles.aChild} />
            <div className={styles.a1}>B 병원</div>
            <div className={styles.div1}>권역외상센터</div>
            <img className={styles.aItem} alt="" src="/group-5.svg" />
            <img className={styles.aInner} alt="" src="/group-6.svg" />
            <div className={styles.div9}>
              <p className={styles.p}>{`응급실 밀집도 `}</p>
              <p className={styles.p}>응급실 병상</p>
              <p className={styles.p}>중환자실 병상</p>
              <p className={styles.p}>{`이송 중인 환자 `}</p>
            </div>
            <div className={styles.div10}>
              <p className={styles.p}>
                <span className={styles.span}>50</span>
                <span>/50</span>
              </p>
              <p className={styles.p}>
                <span className={styles.span}>36</span>
                <span>/40</span>
              </p>
              <p className={styles.p6}>
                <span>6</span>
                <span className={styles.span2}>명</span>
              </p>
            </div>
            <div className={styles.bInner1}>
              <div className={styles.container}>
                <div className={styles.div4}>혼잡</div>
              </div>
            </div>
            <div className={styles.bInner2}>
              <div className={styles.wrapper6}>
                <b className={styles.b}>주의</b>
              </div>
            </div>
            <div className={styles.bInner3}>
              <div className={styles.container}>
                <b className={styles.b}>보통</b>
              </div>
            </div>
            <div className={styles.bInner4}>
              <div className={styles.container}>
                <b className={styles.b}>여유</b>
              </div>
            </div>
          </div>
          <div className={styles.c}>
            <div className={styles.aChild} />
            <div className={styles.a1}>C 병원</div>
            <div className={styles.div1}>지역의료센터</div>
            <img className={styles.aItem} alt="" src="/group-5.svg" />
            <img className={styles.aInner} alt="" src="/group-6.svg" />
            <div className={styles.parent1}>
              <div className={styles.div13}>
                <p className={styles.p}>{`응급실 밀집도 `}</p>
                <p className={styles.p}>응급실 병상</p>
                <p className={styles.p}>중환자실 병상</p>
                <p className={styles.p}>{`이송 중인 환자 `}</p>
              </div>
              <div className={styles.div14}>
                <p className={styles.p}>
                  <span className={styles.span}>40</span>
                  <span>/45</span>
                </p>
                <p className={styles.p}>
                  <span className={styles.span}>37</span>
                  <span>/45</span>
                </p>
                <p className={styles.p6}>
                  <span>0</span>
                  <span className={styles.span2}>명</span>
                </p>
              </div>
            </div>
            <div className={styles.cInner1}>
              <div className={styles.container}>
                <div className={styles.div4}>혼잡</div>
              </div>
            </div>
            <div className={styles.cInner2}>
              <div className={styles.wrapper6}>
                <b className={styles.b}>주의</b>
              </div>
            </div>
            <div className={styles.cInner3}>
              <div className={styles.container}>
                <b className={styles.b}>보통</b>
              </div>
            </div>
            <div className={styles.cInner4}>
              <div className={styles.container}>
                <b className={styles.b}>여유</b>
              </div>
            </div>
            <div className={styles.bInner1}>
              <div className={styles.container}>
                <div className={styles.div4}>혼잡</div>
              </div>
            </div>
            <div className={styles.bInner2}>
              <div className={styles.wrapper6}>
                <b className={styles.b}>주의</b>
              </div>
            </div>
            <div className={styles.bInner3}>
              <div className={styles.container}>
                <b className={styles.b}>보통</b>
              </div>
            </div>
            <div className={styles.bInner4}>
              <div className={styles.container}>
                <b className={styles.b}>여유</b>
              </div>
            </div>
          </div>
          <div className={styles.d}>
            <div className={styles.aChild} />
            <div className={styles.d1}>D 병원</div>
            <div className={styles.div1}>일반의료센터</div>
            <img className={styles.aItem} alt="" src="/group-5.svg" />
            <img className={styles.aInner} alt="" src="/group-6.svg" />
            <div className={styles.parent2}>
              <div className={styles.div2}>
                <p className={styles.p}>{`응급실 밀집도 `}</p>
                <p className={styles.p}>응급실 병상</p>
                <p className={styles.p}>중환자실 병상</p>
                <p className={styles.p}>{`이송 중인 환자 `}</p>
              </div>
              <div className={styles.div3}>
                <p className={styles.p}>
                  <span className={styles.span}>32</span>
                  <span>/40</span>
                </p>
                <p className={styles.p}>
                  <span className={styles.span}>7</span>
                  <span>/15</span>
                </p>
                <p className={styles.p6}>
                  <span>1</span>
                  <span className={styles.span2}>명</span>
                </p>
              </div>
              <div className={styles.frameWrapper6}>
                <div className={styles.container}>
                  <div className={styles.div4}>혼잡</div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.container}>
                  <b className={styles.b}>주의</b>
                </div>
              </div>
              <div className={styles.frameWrapper8}>
                <div className={styles.wrapper19}>
                  <b className={styles.b}>보통</b>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.container}>
                  <b className={styles.b}>여유</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.e}>
            <div className={styles.aChild} />
            <div className={styles.d1}>E 병원</div>
            <div className={styles.div1}>일반의료센터</div>
            <img className={styles.aItem} alt="" src="/group-5.svg" />
            <img className={styles.aInner} alt="" src="/group-6.svg" />
            <div className={styles.parent2}>
              <div className={styles.div2}>
                <p className={styles.p}>{`응급실 밀집도 `}</p>
                <p className={styles.p}>응급실 병상</p>
                <p className={styles.p}>중환자실 병상</p>
                <p className={styles.p}>{`이송 중인 환자 `}</p>
              </div>
              <div className={styles.div3}>
                <p className={styles.p}>
                  <span className={styles.span}>23</span>
                  <span>/37</span>
                </p>
                <p className={styles.p}>-</p>
                <p className={styles.p6}>
                  <span>3</span>
                  <span className={styles.span2}>명</span>
                </p>
              </div>
              <div className={styles.frameWrapper6}>
                <div className={styles.container}>
                  <div className={styles.div4}>혼잡</div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.container}>
                  <b className={styles.b}>주의</b>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.container}>
                  <b className={styles.b}>보통</b>
                </div>
              </div>
              <div className={styles.frameWrapper13}>
                <div className={styles.wrapper24}>
                  <b className={styles.b}>여유</b>
                </div>
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
      </div>
    </div>
  );
};

export default Frame6;
