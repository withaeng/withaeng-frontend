import { useState } from 'react';
import CountryTab from '@/components/CountryTab';
import WhCalendar from '@/components/elements/WhCalendar';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhDropdown from '@/components/elements/WhDropdown';
import { AccompanyData } from '@/types/accompany';
import WhInput from '@/components/elements/WhInput';

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
  const [isDayTrip, setIsDayTrip] = useState(false);

  const handleDayTrip = () => {
    if (isDayTrip) {
      setForm((prev: AccompanyData) => ({
        ...prev,
        endTripDate: prev.startTripDate,
      }));
    }
    setIsDayTrip((prev) => !prev);
  };

  return (
    <div className='flex grow flex-col overflow-hidden'>
      <h3 className='my-5 text-headline-04 xl:my-10 xl:text-headline-03'>
        동행 등록을 진행해볼까요? 😃
      </h3>
      <div className='flex grow flex-col gap-10 overflow-auto'>
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
          <p className='mb-3'>동행 인원을 설정해주세요. (본인 포함)</p>
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
          <div className='mb-4 flex items-center gap-2 xl:gap-[22px]'>
            <WhCalendar
              value={form.startTripDate}
              onChange={(value: Date | null) =>
                setForm((prev: AccompanyData) => ({
                  ...prev,
                  startTripDate: value ?? undefined,
                }))
              }
            />
            {!isDayTrip && (
              <>
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
              </>
            )}
          </div>
          <WhCheckbox
            value='isDayTrip'
            id='isDayTrip'
            checked={isDayTrip}
            onChange={handleDayTrip}
          >
            당일치기
          </WhCheckbox>
        </div>
        <div>
          <p className='mb-3'>오픈톡 링크를 적어주세요.</p>
          <WhInput
            value={form.openKakaoUrl}
            handleInputChange={(value: string) =>
              setForm((prev: AccompanyData) => ({
                ...prev,
                openKakaoUrl: value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}
