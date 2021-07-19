import { useEffect } from "react";
import useToggle from "./useToggle";

export default function useFullscreenToggle() {
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
    } catch (error) {
      // TODO: handle error
    }
  };

  const exitFullscreen = () => {
    try {
      document.exitFullscreen();
    } catch (error) {
      // TODO: handle error
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
