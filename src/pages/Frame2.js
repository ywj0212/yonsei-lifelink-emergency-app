import { useEffect } from "react";
import styles from "./Frame2.module.css";
import { Link } from "react-router-dom";

const Frame2 = () => {
  const [isAutoSearch, setIsAutoSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [autoSearchKeyword, setAutoSearchKeyword] = useState("");

  const handleInputChange = (e) => {
    if (isAutoSearch) {
      const enteredValue =
        e.nativeEvent.inputType === "deleteContentBackward"
          ? ""
          : e.nativeEvent.data;
      focusIndex >= 0 && setSearchKeyword(autoSearchKeyword + enteredValue);
      setIsAutoSearch(false);
      setFocusIndex(-1);
      return;
    }
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (isAutoSearch) {
      return;
    }
    getSearchQuery({ query: searchKeyword });
  }, [getSearchQuery, searchKeyword, isAutoSearch]);

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
                value={isAutoSearch ? autoSearchKeyword : searchKeyword}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={styles.div2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
