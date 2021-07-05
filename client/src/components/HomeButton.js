import { useHistory } from "react-router-dom";
import styles from "./HomeButton.module.css";

function HomeButton() {
  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <button className={styles.button} onClick={navigateHome}>
      <svg className={styles.svg} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </svg>
    </button>
  );
}

export default HomeButton;
