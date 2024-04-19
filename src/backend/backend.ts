import axios from "axios";

export const getExample = async () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URI}/get-example`);
};
