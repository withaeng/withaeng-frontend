import { useSearchParams } from 'next/navigation';

export default function useQueryString() {
  const searchParams = useSearchParams();

  /**
   * url query string 보내는 함수.
   * @param name query key
   * @param value query value
   * @returns query string
   */
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };

  return { createQueryString };
}
