import CountryTab from '@/components/CountryTab';
import WhCalendar from '@/components/elements/WhCalendar';
import WhDropdown from '@/components/elements/WhDropdown';
import { AccompanyData } from '@/types/accompany';
import { useState } from 'react';

const dataList = [
  { id: '2', name: '2명' },
  { id: '3', name: '3명' },
  { id: '4', name: '4명' },
];

export default function Step1ModalContent({
  form,
  setForm,
}: {
  form: AccompanyData;
  setForm: React.Dispatch<React.SetStateAction<AccompanyData>>;
}) {
  const [tabCountry, setTabCountry] = useState('0');
  return (
    <>
      <h3 className='text-headline-03 my-10'>동행 등록을 진행해볼까요? 😃</h3>
      <div className='flex flex-col gap-10 my-5'>
        <div>
          <p>도시를 선택해주세요.</p>
          <CountryTab
            tabValue={tabCountry}
            onTabChange={setTabCountry}
            value={form.country ?? ''}
            onChange={(value: string) =>
              setForm((prev: AccompanyData) => ({ ...prev, country: value }))
            }
          />
        </div>
        <div>
          <p className='mb-3'>인원을 설정해주세요. (본인 포함)</p>
          <WhDropdown
            value={form.accompanyCnt.toString()}
            onChange={(value: string) =>
              setForm((prev: AccompanyData) => ({
                ...prev,
                accompanyCnt: Number(value),
              }))
            }
            dataList={dataList}
          />
        </div>
        <div>
          <p className='mb-3'>여행 일정을 선택해주세요.</p>
          <div className='flex gap-[22px] items-center'>
            <WhCalendar
              value={form.startTripDate}
              onChange={(value: Date | null) =>
                setForm((prev: AccompanyData) => ({
                  ...prev,
                  startTripDate: value ?? undefined,
                }))
              }
            />
            <span className='text-headline-04 text-nutral-black-05'>~</span>
            <WhCalendar
              value={form.endTripDate}
              onChange={(value: Date | null) =>
                setForm((prev: AccompanyData) => ({
                  ...prev,
                  startTripDate: value ?? undefined,
                }))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
