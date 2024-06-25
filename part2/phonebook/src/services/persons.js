import axios from "axios";

const BASE_URL = "/api/persons";

const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then((response) => response.data);
};

const create = (data) => {
  const request = axios.post(BASE_URL, data);
  return request.then((response) => response.data);
};

const update = (data) => {
  const request = axios.put(`${BASE_URL}/${data.id}`, data);
  return request.then((response) => response.data);
};

const deleteEntry = (id) => {
  const request = axios.delete(`${BASE_URL}/${id}`);
  return request.then((response) => response.status);
};

export { getAll, create, update, deleteEntry };
