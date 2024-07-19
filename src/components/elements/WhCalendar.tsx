import localFont from 'next/font/local';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { CalendarIcon } from '../../../public/assets/icons/communicate';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../public/assets/icons/arrow';

const pretendard = localFont({
  src: '../../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
});

const defaultInputCss =
  'w-full !px-4 !py-3 text-body-02 placeholder:text-body-02 placeholder:text-nutral-white-03 rounded disabled:bg-nutral-white-02 disabled:border-0';
const isFocusBorderCss =
  'focus:outline-primary-pressing border-nutral-white-03 border';
let sizeCss = '';

const YEARS = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i + 1
);
const MONTHS = [
  { name: '1월', value: 'January' },
  { name: '2월', value: 'February' },
  { name: '3월', value: 'March' },
  { name: '4월', value: 'April' },
  { name: '5월', value: 'May' },
  { name: '6월', value: 'June' },
  { name: '7월', value: 'July' },
  { name: '8월', value: 'August' },
  { name: '9월', value: 'September' },
  { name: '10월', value: 'October' },
  { name: '11월', value: 'November' },
  { name: '12월', value: 'December' },
];
const WEEKDAY = [
  { name: '일', value: 'Sunday' },
  { name: '월', value: 'Monday' },
  { name: '화', value: 'Tuesday' },
  { name: '수', value: 'Wednesday' },
  { name: '목', value: 'Thursday' },
  { name: '금', value: 'Friday' },
  { name: '토', value: 'Saturday' },
];

interface CalendarProps {
  onChange: (value: Date | null) => void;
  size?: 'lg' | 'md' | 'sm';
  value?: Date | null;
}

export default function WhCalendar({
  onChange,
  size = 'md',
  value,
}: CalendarProps) {
  const dateChange = (date: Date | string | null) => {
    onChange(dayjs(date).toDate());
  };

  if (size === 'lg') {
    sizeCss = 'h-11';
  } else if (size === 'md') {
    sizeCss = 'h-10';
  } else if (size === 'sm') {
    sizeCss = 'h-9';
  }

  return (
    <div className='relative'>
      <div className='flex flex-col justify-center w-full'>
        <div className='*:w-full'>
          <DatePicker
            selected={value}
            placeholderText='2024.01.01'
            onChange={dateChange}
            className={`${sizeCss} ${defaultInputCss} ${isFocusBorderCss} w-full`}
            calendarClassName={pretendard.className}
            dateFormat='yyyy.MM.dd'
            showYearDropdown
            showMonthDropdown
            scrollableYearDropdown
            onKeyDown={(e) => {
              e.preventDefault();
            }}
            yearDropdownItemNumber={100}
            formatWeekDay={(nameOfDay) =>
              WEEKDAY[WEEKDAY.findIndex((week) => week.value === nameOfDay)]
                .name
            }
            showIcon
            toggleCalendarOnIconClick
            icon={
              <div className='absolute top-1 right-1'>
                <CalendarIcon width={20} height={20} stroke='#BAB8B6' />
              </div>
            }
            renderCustomHeader={({
              date,
              changeMonth,
              changeYear,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className='flex justify-between items-center bg-nutral-white-01 h-10 mx-4'>
                <button
                  type='button'
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  aria-label='prev month'
                >
                  <ChevronLeftIcon width={20} height={20} stroke='#FFA500' />
                </button>
                <div>
                  <select
                    value={date.getFullYear()}
                    onChange={({ target: { value: targetValue } }) =>
                      changeYear(Number(targetValue))
                    }
                  >
                    {YEARS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    value={MONTHS[date.getMonth()].value}
                    onChange={({ target: { value: targetValue } }) =>
                      changeMonth(
                        MONTHS.findIndex((month) => month.value === targetValue)
                      )
                    }
                  >
                    {MONTHS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type='button'
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  aria-label='next month'
                >
                  <ChevronRightIcon width={20} height={20} stroke='#FFA500' />
                </button>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
