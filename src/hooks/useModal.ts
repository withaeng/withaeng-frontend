import { useModalActions } from '@/stores/modalStore';

const useModal = () => {
  const {
    setOpen,
    setType,
    setContent,
    setTitle,
    setButtonPositiveText,
    setButtonNegativeText,
    setHandler,
  } = useModalActions();

  const alert = (content: string, positiveText: string, title?: string) => {
    setOpen(true);
    setType('alert');
    setTitle(title || '');
    setContent(content);
    setButtonPositiveText(positiveText);
    return new Promise<boolean>((res) => {
      setHandler(res);
    });
  };

  const confirm = (
    content: string,
    positiveText: string,
    negativeText: string
  ) => {
    setOpen(true);
    setType('confirm');
    setContent(content);
    setButtonPositiveText(positiveText);
    setButtonNegativeText(negativeText);
    return new Promise<boolean>((res) => {
      setHandler(res);
    });
  };

  return {
    alert,
    confirm,
  };
};

export default useModal;
