import { useEffect, useState } from "react";

export default function useFullscreenToggle() {
  const hasFullsreenElement = () => !!document.fullscreenElement;
  const [isFullscreen, setIsFullscreen] = useState(hasFullsreenElement());
  const canFullscreen = document.fullscreenEnabled;

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(hasFullsreenElement());
    };

    document.addEventListener("fullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  });

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
