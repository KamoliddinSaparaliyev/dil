import {create} from 'zustand';

type ModalState = {
  isAlert: boolean;
  openAlert: () => void;
  closeAlert: () => void;
};

const useAlertStore = create<ModalState>((set) => ({
  isAlert: false,
  openAlert: () => set({ isAlert: true }),
  closeAlert: () => set({ isAlert: false }),
}));

export default useAlertStore;