import { useEffect, useState } from "react";
import styles from "./Frame2.module.css";
import { Link } from "react-router-dom";

const departmentArray = [
  "내과",
  "호흡기내과",
  "순환기내과",
  "소화기내과",
  "혈액종양내과",
  "내분비대사내과",
  "알레르기내과",
  "신장내과",
  "감염내과",
  "류마티스내과",

  "외과",
  "간담체외과",
  "위장관외과",
  "대장항문외과",
  "유방내분비외과",
  "이식혈관외과",
  "외상외과",
  "성형외과",
  "신경외과",
  "정형외과",
  "흉부외과",

  "산부인과",
  "가정의학과",
  "마취통증의학과",
  "방사선 종양학과",
  "병리과",
  "비뇨의학과",
  "신경과",
  "안과",
  "영상의학과",
  "응급의학과",
  "의공학과",
  "이비인후과",
  "임상약리학과",
  "임상유전체의학과",
  "재활의학과",
  "정신건강의학과",
  "중환자의학과",
  "진단검사의학과",
  "피부과",
  "핵의학과",
  "융합의학과",
];

const Frame2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(departmentArray);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = departmentArray.filter((textItem) =>
        textItem.includes(inputValue)
      );
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event) => {
    if (isHaveInputValue) {
      if (
        event.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.lifelinkParent}>
          <div className={styles.lifelink}>LiFELiNK</div>
          <img className={styles.groupChild} alt="" src="/group-4.svg" />
          <Link to="/map">
            <img className={styles.groupItem} alt="" src="/group-80.svg" />
          </Link>

          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.div1}>
              필요하다고 예상되는 과를 입력하세요.
            </div>
            <div className={styles.rectangleDiv}>
              <input
                placeholder={"#정형외과 #내과"}
                className={styles.department_input}
                type="text"
                value={inputValue}
                onChange={changeInputValue}
                onKeyUp={handleDropDownKey}
              ></input>
              {isHaveInputValue && (
                <DropDownBox dropDownList={dropDownList}>
                  {dropDownList.length === 0 && (
                    <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
                  )}
                  {dropDownList.map((dropDownItem, dropDownIndex) => {
                    return (
                      <DropDownItem key={dropDownIndex}>
                        <div
                          style={{ width: "100%" }}
                          onClick={() => clickDropDownItem(dropDownItem)}
                          onMouseOver={() =>
                            setDropDownItemIndex(dropDownIndex)
                          }
                        >
                          {dropDownItem}
                        </div>
                      </DropDownItem>
                    );
                  })}
                </DropDownBox>
              )}
            </div>
            <div className={styles.div2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropDownBox = ({ dropDownList, children }) => {
  const boxHeight = dropDownList ? dropDownList.length * 28 : 0;

  return (
    <ul
      style={{
        margin: "0 auto",
        height: `${boxHeight}px`,
        backgroundColor: "var(--color-gainsboro-200)",
        borderTop: "none",
        width: "268px",
        borderRadius: "6px",
        display: "block",
        color: "white",
        zIndex: "3",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.3)",
        listStyleType: "none",
      }}
    >
      {children}
    </ul>
  );
};

const DropDownItem = ({ children }) => {
  return (
    <li
      style={{
        cursor: "pointer",
        position: "relative",
        display: "flex",
        justifyContent: "left",
        paddingLeft: 10,
        alignItems: "center",
        left: "-40px",
        backgroundColor: "#fefefe",
        height: "28px",
        width: "298px",
        color: "var(--color-dimgray-200)",
        fontSize: "14px",
      }}
    >
      {children}
    </li>
  );
};

export default Frame2;
