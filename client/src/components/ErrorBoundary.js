import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import ErrorScreen from "../screens/ErrorScreen";

function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorScreen}>
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
