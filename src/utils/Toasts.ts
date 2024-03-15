import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySucess = () =>
  toast.success("Sucesso ao adicionar!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

export const notifyWarn = () =>
  toast.warn("Produto já adicionado!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
