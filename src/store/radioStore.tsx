import { create } from 'zustand';

type radioState = {
  checkedValue: string;
  setCheckedValue: (newValue: string) => void;
};

const useRadioStore = create<radioState>((set) => ({
  checkedValue: '',
  setCheckedValue: (newValue: string) => {
    set({ checkedValue: newValue });
  },
}));

export default useRadioStore;
