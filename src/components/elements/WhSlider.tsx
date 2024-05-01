'use client';

import Slider from 'rc-slider';
import './slider.css';
import { MarkObj } from 'rc-slider/lib/Marks';

interface SliderProps {
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  value?: number | number[];
  onChange?: (value: number | number[]) => void;
  marks?: Record<string | number, React.ReactNode | MarkObj>;
  range?: boolean;
  disabled?: boolean;
}

export default function WhSlider({
  defaultValue,
  min = 0,
  max = 100,
  step,
  value,
  onChange,
  marks,
  range = false,
  disabled = false,
}: SliderProps) {
  return (
    <Slider
      className={`mx-3 ${marks && 'mb-8'}`}
      range={range}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      marks={marks}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
    // <div className='flex flex-col gap-3'>
    //   <ReactSlider
    //     className='h-2 w-full flex items-center my-2'
    //     defaultValue={defaultValue}
    //     ariaLabel={['Lower thumb', 'Upper thumb']}
    //     ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
    //     min={min}
    //     max={max}
    //     step={step}
    //     renderTrack={({ key, ...props }, state) => (
    //       <div
    //         /* eslint-disable react/jsx-props-no-spreading */
    //         {...props}
    //         key={state.index}
    //         className={`top-0 bottom-0 rounded-full ${state.index % 2 === 1 ? 'bg-primary-main' : 'bg-nutral-white-02'}`}
    //       />
    //     )}
    //     renderThumb={({ key, ...props }, state) => (
    //       <div
    //         {...props}
    //         key={state.index}
    //         className='w-6 h-6 rounded-full bg-primary-main shadow-[0_2px_8px_0_rgba(0,0,0,0.1)]'
    //       />
    //     )}
    //   />
    //   {innerLabelList && (
    //     <div className='flex justify-between mx-1'>
    //       {innerLabelList.map((label) => (
    //         <p className='w-5 text-center'>{label}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
}
