// export default AuthContext;
import { create } from "zustand";
import { getData } from "../services/apiCallers";
export const useAuthStore = create((set) => ({
  isAuth:localStorage.getItem('token')? true: false,
  token: localStorage.getItem('token'),
  userData: "",
  loginModalOpen: false,
  loginModalClose: () => set({ loginModalOpen: false }),
  loginModalOpenModal: () => set({ loginModalOpen: true }),
  login: async () => {
    const response = await getData("users/1");
    const token = "token here";
    console.log(response);

    const userData = response.data;
    set({ isAuth: true, token, userData });
    localStorage.setItem('token',token)
    set({ loginModalOpen: false });
  },
  logout: () => {
    set({ isAuth: false, token: "", userData: "" });
localStorage.removeItem('token')
    try {
      fetch("/api/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
