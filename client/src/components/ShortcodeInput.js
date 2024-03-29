import { useForm } from "react-hook-form";
import Button from "./Button";
import useTheme from "../hooks/useTheme";
import useFormAutofocus from "../hooks/useFormAutofocus";
import { randomString } from "../utils/string";
import { classList } from "../utils/style";
import { inputSize } from "../utils/form";
import styles from "./ShortcodeInput.module.css";

const DEFAULT_SIZE = 5;
const MAX_SIZE = 30;

const validations = {
  required: {
    value: true,
    message: `Shortcode must be at least ${DEFAULT_SIZE} characters`,
  },
  minLength: {
    value: DEFAULT_SIZE,
    message: `Shortcode must be at least ${DEFAULT_SIZE} characters`,
  },
  maxLength: {
    value: MAX_SIZE,
    message: `Shortcode must be less than ${MAX_SIZE} characters`,
  },
  pattern: {
    value: /^[A-Z0-9-_]+$/i,
    message: "Shortcode can contain letters, numbers, hyphens, underscores",
  },
};

function ShortcodeInput({ onSubmit }) {
  const { isDarkTheme, isLightTheme } = useTheme();
  const formRef = useFormAutofocus();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      shortcode: randomString(DEFAULT_SIZE),
    },
  });

  const baseUrl = window.location.href;

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ shortcode }) => onSubmit(shortcode))}
      noValidate
      ref={formRef}
    >
      <div className={styles.field}>
        <span data-testid="shortcode-base-url" className={styles.baseUrl}>
          {baseUrl}
        </span>
        <input
          data-testid="shortcode-input"
          type="text"
          className={classList(styles.input, {
            [styles.darkTheme]: isDarkTheme,
            [styles.lightTheme]: isLightTheme,
          })}
          size={inputSize(watch("shortcode"), DEFAULT_SIZE)}
          minLength={DEFAULT_SIZE}
          maxLength={MAX_SIZE}
          spellCheck={false}
          {...register("shortcode", validations)}
        />
      </div>
      <Button
        data-testid="shortcode-button"
        className={styles.button}
        disabled={errors.shortcode}
      >
        Join timer
      </Button>
    </form>
  );
}

export default ShortcodeInput;
