import ScreenWrapper from "../components/ScreenWrapper";
import Logo from "../components/Logo";
import ShortcodeInput from "../components/ShortcodeInput";
import ThemeToggle from "../components/ThemeToggle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useNavigation from "../hooks/useNavigation";

function HomeScreen() {
  const { navigateTimer } = useNavigation();

  useDocumentTitle("Onetime");

  return (
    <ScreenWrapper>
      <Logo />
      <ShortcodeInput onSubmit={navigateTimer} />
      <ThemeToggle />
    </ScreenWrapper>
  );
}

export default HomeScreen;
