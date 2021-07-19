import { useLayoutEffect, useRef } from "react";

export default function useFormAutofocus() {
  const formRef = useRef();

  useLayoutEffect(() => {
    if (formRef.current) {
      formRef.current.querySelector("input")?.focus();
    }
  }, []);

  return formRef;
}
