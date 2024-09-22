import { create } from 'zustand';

type Type = '' | 'alert' | 'confirm' | 'filter';
export type Handler<T = unknown> = (value: T | PromiseLike<T>) => void;

interface ModalState<T = any> {
  type: Type;
  title: string;
  content: string;
  positiveText: string;
  negativeText?: string;
  open: boolean;
  handler?: Handler<T>;
  props: T;
  actions: {
    setOpen: (visible: boolean) => void;
    setType: (type: Type) => void;
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
    setButtonPositiveText: (negativeText: string) => void;
    setButtonNegativeText: (positiveText: string) => void;
    setHandler: (handler: Handler<T>) => void;
    setProps: (props: T) => void;
  };
}

export const useModalStore = create<ModalState>((set) => ({
  open: false,
  type: 'alert',
  title: '',
  content: '',
  positiveText: '확인',
  negativeText: '취소',
  props: '',
  actions: {
    setOpen: (visible: boolean) => set({ open: visible }),
    setType: (type: Type) => set({ type }),
    setTitle: (title: string) => set({ title }),
    setContent: (content: string) => set({ content }),
    setButtonPositiveText: (positiveText: string) => set({ positiveText }),
    setButtonNegativeText: (negativeText: string) => set({ negativeText }),
    setHandler: (handler) => set({ handler }),
    setProps: (props) => set({ props }),
  },
}));

export const useModalActions = () => useModalStore((state) => state.actions);
