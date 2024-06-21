// import { create } from "zustand";

// const useBearStore = create((set) => ({
//   isUserValid: false,
//   setIsUserValid: (arg: boolean) => set({ isUserValid: arg }),
//   checkUserToken: () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       set({ isUserValid: true });
//     } else {
//       set({ isUserValid: false });
//     }
//   },
// }));

// export default useBearStore;
// state/State.ts
import { create } from "zustand";
interface BearStore {
  checkUserToken: () => any;
  // setIsUserValid: (isValid: boolean) => any;
}

const useBearStore = create<BearStore>(() => ({
  // isUserValid: false,
  // setIsUserValid: (isValid: boolean) => set({ isUserValid: isValid }),
  // checkUserToken: () => {
  //   if (token) {
  //     return set({ isUserValid: true });
  //   } else {
  //     return set({ isUserValid: false });
  //   }
  // },

  // setIsUserValid: (isValid: boolean) => set({ isUserValid: isValid }),
  checkUserToken: () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  },
}));

export default useBearStore;
