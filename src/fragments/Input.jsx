export const Input = ({
  className,
  label,
  id,
  type = "text",
  setValue,
  value,
  placeholder,
  required,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
      />
    </>
  );
};
