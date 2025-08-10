import { create } from 'zustand';

const useAlertStore = create((set) => ({
  message: '',
  type: '',
  visible: false,
  showAlert: (msg, type = 'info') => set({ message: msg, type, visible: true }),
  hideAlert: () => set({ visible: false }),
}));

export default useAlertStore;