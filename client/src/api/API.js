import axios from "axios";
import { nanoid } from "nanoid";
const API = axios.create({ baseURL: "http://localhost:4001/datas" });

export const getDatas = () => API.get("/");
export const getData = (id) => API.get(`/${id}`);
export const createData = (formData) =>
  API.post("/", { ...formData, id: nanoid() });
export const deleteData = (id) => API.delete(`/${id}`);
export const updateData = (formData, id) => API.put(`/${id}`, formData);

export default API;
