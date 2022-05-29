import { TData, TRow } from "../Elements";
import DataImage from "./DataImage";
import { ReactComponent as DeleteIcon } from "../../assets/icons8-delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons8-edit.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteData } from "../../api/API";

const DataRow = ({
  id,
  status,
  capacity,
  name,
  layout,
  index,
  removeItemFromUI,
}) => {
  const handleDelete = async () => {
    try {
      await deleteData(id);

      removeItemFromUI();
      toast(`Data deleted.`);
    } catch (error) {
      console.error(error.message);
      toast("Something Went Wrong");
    }
  };
  return (
    <TRow>
      <TData style={{ width: 0, textAlign: "center" }}>{index}</TData>
      <TData>{layout}</TData>
      <TData>{name}</TData>
      <TData>{capacity}</TData>
      <TData>{status ? "Active" : "Inactive"}</TData>
      <TData style={{ width: 80 }}>
        <DataImage imageSrc="http://unsplash.it/64/64?random&gravity=centerhttp://placeskull.com/24/24" />
      </TData>
      <TData style={{ width: 0 }}>
        <div className="flex gap-2">
          <Link
            to={`/update/${id}`}
            className="bg-gray-700 hover:bg-gray-600 focus-visible:bg-gray-600 p-1 rounded text-white"
          >
            <EditIcon fill="#fff" width={18} height={18} />
          </Link>
          <button className="bg-red-500 hover:bg-red-600 focus-visible:bg-red-600 p-1 rounded text-white">
            <DeleteIcon
              fill="#fff"
              width={18}
              height={18}
              onClick={handleDelete}
            />
          </button>
        </div>
      </TData>
    </TRow>
  );
};
export default DataRow;
