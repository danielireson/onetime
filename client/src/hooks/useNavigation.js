import { useHistory } from "react-router-dom";

export default function useNavigation() {
  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  const navigateTimer = (shortcode) => {
    history.push(shortcode);
  };

  return { navigateHome, navigateTimer };
}
