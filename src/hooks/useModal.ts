import { useModalActions } from '@/stores/modalStore';
import { TAccompanyFilter } from '@/types/accompany';

const useModal = () => {
  const {
    setOpen,
    setType,
    setContent,
    setTitle,
    setButtonPositiveText,
    setButtonNegativeText,
    setHandler,
    setProps,
    setCity,
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
    negativeText: string,
    title?: string
  ) => {
    setOpen(true);
    setType('confirm');
    setTitle(title || '');
    setContent(content);
    setButtonPositiveText(positiveText);
    setButtonNegativeText(negativeText);
    return new Promise<boolean>((res) => {
      setHandler(res);
    });
  };

  const filter = (
    props: TAccompanyFilter | null,
    city?: { id: string; value: string }[] | null
  ) => {
    setOpen(true);
    setProps(props);
    setType('filter');
    if (city) {
      setCity(city);
    } else {
      setCity(null);
    }
    return new Promise<TAccompanyFilter | null>((res) => {
      setHandler(res);
    });
  };

  return {
    alert,
    confirm,
    filter,
  };
};

export default useModal;
