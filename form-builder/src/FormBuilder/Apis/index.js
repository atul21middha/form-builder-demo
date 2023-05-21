import { axios } from "../../Axios";

export const getFormData = () => {
  return axios.post("/users/all");
  // return {
  //   data: {
  //     title: "",
  //     body: "My Body",
  //     textBoxText: "Email enter",
  //     buttonText: "",
  //     icon: "https://picsum.photos/200",
  //   },
  // };
};

export const addFormData = (data) => {
  return axios.post("/users/add", data);
};
