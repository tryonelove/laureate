import create from "zustand";

export const useCardStore = create((set) => {
  return {
    height: 332,
    width: 672,
    changeHeight: (c: any) => {
      set((state: any) => ({ height: c }));
    },
    changeWidth: (c: any) => {
      set((state: any) => ({ width: c }));
    },
  };
});
