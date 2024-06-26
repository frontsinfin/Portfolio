import { Control, useController } from "react-hook-form";
interface InputProps {
  placeholder?: string;
  type?: string;
  name: string;
  control: Control;
  rules?: {};
  InputStyles: string;
}
const labelStyles = "relative";

const ErrorsMessageStyles =
  "absolute top-[85%] md:top-[90%] text-[10px] md:text-[12px] text-[#0085FF] font-normal";

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  control,
  rules,
  placeholder,
  InputStyles,
}) => {
  const { field, fieldState } = useController({ name, control, rules });
  return (
    <label className={labelStyles}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${InputStyles} ${
          fieldState.error ? "border-[#0085FF]" : ""
        }`}
        id={name}
        {...field}
      />
      {fieldState.error && (
        <p className={ErrorsMessageStyles}>{fieldState.error.message}</p>
      )}
    </label>
  );
};

export default Input;
