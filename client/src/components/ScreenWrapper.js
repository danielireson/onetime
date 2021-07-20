import ModalDialog from "./ModalDialog";
import useTheme from "../hooks/useTheme";
import useModal from "../hooks/useModal";
import { classList } from "../utils/style";
import styles from "./ScreenWrapper.module.css";

function ScreenWrapper({ children }) {
  const { isDarkTheme, isLightTheme } = useTheme();
  const { modal } = useModal();

  return (
    <div
      className={classList(styles.wrapper, {
        [styles.darkTheme]: isDarkTheme,
        [styles.lightTheme]: isLightTheme,
      })}
    >
      {children}
      {modal && <ModalDialog modal={modal} />}
    </div>
  );
}

export default ScreenWrapper;
