const DataImage = ({ imageSrc }) => {
  return (
    <img
      className="w-16 h-16 rounded object-cover "
      src={imageSrc}
      alt="indicates the data"
    />
  );
};
export default DataImage;
