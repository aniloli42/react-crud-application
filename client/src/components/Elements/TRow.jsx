const TRow = ({ children, ...rest }) => {
  return (
    <tr className="bg-gray-200" {...rest}>
      {children}
    </tr>
  );
};
export default TRow;
