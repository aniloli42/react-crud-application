const TData = ({ children, Thead, ...rest }) => {
  return (
    <>
      {!Thead ? (
        <td className="p-2 border border-white" {...rest}>
          {children}
        </td>
      ) : (
        <th
          className="text-left p-2 border border-white text-white font-normal"
          {...rest}
        >
          {children}
        </th>
      )}
    </>
  );
};
export default TData;
