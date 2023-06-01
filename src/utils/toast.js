import { toast } from "react-toastify";

export const showAlert = (message = [""], type = "info") => {
  message.forEach((content) => {
    toast(content, {
      type,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  });
};
