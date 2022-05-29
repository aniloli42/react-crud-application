import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getDatas } from "../../api/API";
import { DataRow } from "../../components";
import { TData, TRow } from "../../components/Elements";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const callRef = useRef(null);

  useEffect(() => {
    if (callRef.current != null) return;

    callRef.current = true;

    getDatas()
      .then((res) => {
        setDatas(res.data);
      })
      .catch((e) => {
        console.error(e.message);
        toast("Something Went Wrong");
      });
  }, []);

  return (
    <main className="px-4 py-2 flex flex-col">
      {/* container */}
      <div className="flex flex-col self-center justify-self-center max-w-5xl w-full my-10">
        <Link
          to="/create"
          className="self-end py-1 px-3 bg-gray-600 text-white rounded-md text-sm"
        >
          + Add Data
        </Link>
        <div className="w-full overflow-auto pb-2 flex">
          <table className="w-full mt-2 rounded-lg shadow shadow-gray-500/10 overflow-hidden">
            <thead>
              <TRow className="bg-gray-600">
                <TData Thead>S.NO.</TData>
                <TData Thead>Summary</TData>
                <TData Thead>Name</TData>
                <TData Thead>Capacity</TData>
                <TData Thead>Status</TData>
                <TData Thead>Image</TData>
                <TData Thead>Actions</TData>
              </TRow>
            </thead>
            <tbody>
              {datas?.map((data, index) => (
                <DataRow
                  key={data.id}
                  {...data}
                  index={index + 1}
                  removeItemFromUI={() => {
                    setDatas(datas.filter((d) => d.id !== data.id));
                  }}
                />
              ))}
              {datas.length === 0 && (
                <TRow>
                  <TData colSpan={7} style={{ textAlign: "center" }}>
                    No Data Available
                  </TData>
                </TRow>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default Home;
