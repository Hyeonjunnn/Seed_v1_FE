import { create } from 'zustand';

const useConfirmStore = create((set) => ({
  visible: false,
  message: '',
  onConfirm: () => {},
  onCancel: null,
  show: (message, onConfirm, onCancel) =>
    set({ visible: true, message, onConfirm, onCancel }),
  hide: () => set({ visible: false, message: '', onConfirm: () => {}, onCancel: null }),
}));

export default useConfirmStore;