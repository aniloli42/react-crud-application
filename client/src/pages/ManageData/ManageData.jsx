import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { createData, getData, updateData } from "../../api/API";
import { Input } from "../../components/Elements";

const ManageData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    layout: "Flex",
    capacity: "",
    status: false,
  });

  const callRef = useRef(null);

  useEffect(() => {
    if (callRef.current != null) return;
    callRef.current = true;

    if (id == null || location.pathname === "/create") return;
    console.log(id);

    getData(id)
      .then((res) => {
        setFormData((prev) => ({
          ...prev,
          ...res.data,
        }));
      })
      .catch((e) => {
        console.error(e.message);
        toast("Invalid Request");
        navigate("/error-404");
      });
  }, [id, navigate, location.pathname]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreateData = async (e) => {
    try {
      e.preventDefault();

      if (formData.name === "" || formData.capacity === "") {
        throw new Error("Fill All Fields.");
      }

      await createData(formData);
      navigate("/", {
        replace: true,
      });
      toast("Data Created");
      e.target.reset();
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    }
  };

  const handleUpdateData = async (e) => {
    try {
      e.preventDefault();
      if (formData.name === "" || formData.capacity === "") {
        throw new Error("Fill All Fields.");
      }

      await updateData(formData, id);
      toast("Data Updated");
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error(error.message);
      toast(error.message);
    }
  };

  return (
    <main className="flex items-center justify-center p-[6vw] md:py-[6vh]">
      <div className="w-full bg-white rounded border">
        <header className="py-3 px-4">
          <h2 className="text-base font-semibold">
            {id != null ? "Update" : "Create"} Data
          </h2>
        </header>
        <hr />
        <div className="flex flex-col">
          <form
            className="mx-auto flex flex-col p-4 gap-4 sm:gap-2"
            onSubmit={async (e) =>
              id == null ? handleCreateData(e) : handleUpdateData(e)
            }
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
              <label className="sm:w-20 inline-block">Layout:</label>
              <select
                name="layout"
                className="py-1 px-2 rounded grow border bg-transparent border-gray-400 placeholder:text-gray-400 "
                value={formData.layout}
                onChange={handleChange}
              >
                <option value="Flex">Flex</option>
                <option value="Grid">Grid</option>
              </select>
            </div>
            <Input
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            >
              Name:
            </Input>
            <Input
              name="capacity"
              placeholder="Enter Number of Capacity"
              type="number"
              value={formData.capacity}
              onChange={handleChange}
            >
              Capacity:
            </Input>

            <div className="flex gap-1 items-center">
              <label className="w-20 inline-block">Status</label>
              <input
                type="checkbox"
                name="status"
                title="status"
                checked={formData.status}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, status: e.target.checked }))
                }
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-1">
              <label className="w-20 inline-block">Image:</label>
              <input type="file" name="image" />
            </div>

            <div className="flex gap-4 mt-2">
              <button className="sm:ml-20 py-2 px-4 bg-gray-700 text-white rounded">
                {id != null ? "Update" : "Create"} Data
              </button>
              <Link to="/" className="py-2 px-4 bg-red-500 text-white rounded">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default ManageData;
