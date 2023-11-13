import { create } from "zustand";

type NavbarStore = {
  sidebarOpen: boolean;
  toggleNavbar: () => void;
  setSidebarOpen: (value: boolean) => void;
};

export const useNavbarStore = create<NavbarStore>((set) => ({
  sidebarOpen: false,
  toggleNavbar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (value) => set({ sidebarOpen: value }),
}));
