import axios from "axios";

const BASE_URL = "http://localhost:3000/employees";

export const getAllEmployees = () => {
  return axios.get(BASE_URL);
};

export const addEmployee = (employee) => {
  return axios.post(BASE_URL, employee);
};

export const updateEmployee = (employee) => {
  return axios.put(`${BASE_URL}/${employee.id}`, employee);
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(`${BASE_URL}/${employeeId}`);
};
