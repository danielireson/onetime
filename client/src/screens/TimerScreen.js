import { useParams } from "react-router-dom";
import ScreenWrapper from "../components/ScreenWrapper";
import CloseButton from "../components/CloseButton";
import FullscreenButton from "../components/FullscreenButton";
import Timer from "../components/Timer";
import TimerControls from "../components/TimerControls";
import TimerLink from "../components/TimerLink";
import ThemeToggle from "../components/ThemeToggle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useNavigation from "../hooks/useNavigation";
import useTimerApi from "../hooks/useTimerApi";
import useFullscreenToggle from "../hooks/useFullscreenToggle";
import useTimerTicker from "../hooks/useTimerTicker";

function TimerScreen() {
  const { navigateHome } = useNavigation();
  const { timerId } = useParams();
  const { endTime, updateEndTime } = useTimerApi(timerId);
  const { minutes, seconds } = useTimerTicker(endTime);
  const {
    canFullscreen,
    isFullscreen,
    toggleFullscreen,
  } = useFullscreenToggle();

  useDocumentTitle(`${minutes}m ${seconds}s`);

  return (
    <ScreenWrapper>
      <CloseButton hidden={isFullscreen} onClick={navigateHome} />
      <FullscreenButton hidden={!canFullscreen} onClick={toggleFullscreen} />
      <TimerLink hidden={isFullscreen} />
      <Timer minutes={minutes} seconds={seconds} />
      <TimerControls hidden={isFullscreen} onUpdateEndTime={updateEndTime} />
      <ThemeToggle hidden={isFullscreen} />
    </ScreenWrapper>
  );
}

export default TimerScreen;
