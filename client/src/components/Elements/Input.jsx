const Input = ({ children, ...rest }) => {
  return (
    <div className="flex sm:flex-row gap-1 flex-col sm:items-center">
      <label className="sm:w-20 inline-block">{children}</label>
      <input
        type="text"
        className="border-gray-400 placeholder:text-gray-400 rounded py-1 px-2 grow"
        {...rest}
      />
    </div>
  );
};
export default Input;
