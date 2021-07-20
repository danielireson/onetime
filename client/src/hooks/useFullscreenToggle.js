import { useEffect } from "react";
import useToggle from "./useToggle";
import useModal from "./useModal";

export default function useFullscreenToggle() {
  const { showMessageModal } = useModal();
  const hasFullsreenElement = () => !!document.fullscreenElement;
  const [isFullscreen, toggleIsFullscreen] = useToggle(hasFullsreenElement());
  const canFullscreen = document.fullscreenEnabled;

  useEffect(() => {
    const handleChange = () => toggleIsFullscreen();

    document.addEventListener("fullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, [toggleIsFullscreen]);

  const requestFullscreen = () => {
    try {
      document.documentElement.requestFullscreen();
      showMessageModal("Controls are hidden in fullscreen mode");
    } catch (error) {
      console.error(error);
      showMessageModal("Unable to enter fullscreen mode");
    }
  };

  const exitFullscreen = () => {
    try {
      document.exitFullscreen();
    } catch (error) {
      console.error(error);
      showMessageModal("Error exiting fullscreen mode");
    }
  };

  const toggleFullscreen = () => {
    if (!hasFullsreenElement()) {
      requestFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return { canFullscreen, isFullscreen, toggleFullscreen };
}
