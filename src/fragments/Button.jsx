export const Button = ({ type, name, onClick, children, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
      {name}
    </button>
  );
};
