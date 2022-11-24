const Input = ({
  placeholder,
  className,
  setInputValue,
  inputValue,
  onKeyDown,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
