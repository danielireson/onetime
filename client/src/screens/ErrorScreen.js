import ScreenWrapper from "../components/ScreenWrapper";
import Message from "../components/Message";
import useNavigation from "../hooks/useNavigation";

function ErrorScreen() {
  const { navigateHome } = useNavigation();

  return (
    <ScreenWrapper>
      <Message message="An unexpected error occurred" onClose={navigateHome} />
    </ScreenWrapper>
  );
}

export default ErrorScreen;
