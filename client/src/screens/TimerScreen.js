import { useParams } from "react-router-dom";
import CloseButton from "../components/CloseButton";
import FullscreenButton from "../components/FullscreenButton";
import Timer from "../components/Timer";
import TimerControls from "../components/TimerControls";
import TimerLink from "../components/TimerLink";
import ThemeToggle from "../components/ThemeToggle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useNavigation from "../hooks/useNavigation";
import useTheme from "../hooks/useTheme";
import useTimerApi from "../hooks/useTimerApi";
import useFullscreenToggle from "../hooks/useFullscreenToggle";
import { classList } from "../utils/style";
import styles from "./TimerScreen.module.css";

function TimerScreen() {
  const { navigateHome } = useNavigation();
  const { isDarkTheme, isLightTheme } = useTheme();
  const { timerId } = useParams();
  const { minutes, seconds, updateEndTime } = useTimerApi(timerId);
  const {
    canFullscreen,
    isFullscreen,
    toggleFullscreen,
  } = useFullscreenToggle();

  useDocumentTitle(`${minutes}m ${seconds}s`);

  return (
    <div
      className={classList(styles.wrapper, {
        [styles.darkTheme]: isDarkTheme,
        [styles.lightTheme]: isLightTheme,
      })}
    >
      <CloseButton showButton={!isFullscreen} onClick={navigateHome} />
      <FullscreenButton showButton={canFullscreen} onClick={toggleFullscreen} />
      <TimerLink showLink={!isFullscreen} />
      <Timer minutes={minutes} seconds={seconds} />
      <TimerControls
        showControls={!isFullscreen}
        updateEndTime={updateEndTime}
      />
      <ThemeToggle showButton={!isFullscreen} />
    </div>
  );
}

export default TimerScreen;
