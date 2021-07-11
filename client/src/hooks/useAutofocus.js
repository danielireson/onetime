import { useLayoutEffect } from "react";

export default function useAutofocus(ref) {
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });
}
