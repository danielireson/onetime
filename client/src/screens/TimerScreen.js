import { useHistory, useParams } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import FullscreenButton from "../components/FullscreenButton";
import Timer from "../components/Timer";
import TimerControls from "../components/TimerControls";
import TimerLink from "../components/TimerLink";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useTimerApi from "../hooks/useTimerApi";
import useFullscreenToggle from "../hooks/useFullscreenToggle";
import styles from "./TimerScreen.module.css";

function TimerScreen() {
  const history = useHistory();
  const { timerId } = useParams();
  const { minutes, seconds, updateEndTime } = useTimerApi(timerId);
  const {
    canFullscreen,
    isFullscreen,
    toggleFullscreen,
  } = useFullscreenToggle();

  useDocumentTitle(`${minutes}m ${seconds}s`);

  const navigateHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <CloseButton showButton={!isFullscreen} onClick={navigateHome} />
      <FullscreenButton showButton={canFullscreen} onClick={toggleFullscreen} />
      <TimerLink showLink={!isFullscreen} url={window.location.href} />
      <Timer minutes={minutes} seconds={seconds} />
      <TimerControls
        showControls={!isFullscreen}
        updateEndTime={updateEndTime}
      />
    </div>
  );
}

export default TimerScreen;
