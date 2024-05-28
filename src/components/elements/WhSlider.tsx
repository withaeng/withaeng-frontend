'use client';

import Slider from 'rc-slider';
import './slider.css';

interface SliderProps {
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  value?: number | number[];
  onChange?: (value: number | number[]) => void;
  marks?: Record<string, string>;
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
      className={`mx-3 w-full ${marks && 'mb-8'}`}
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
  );
}
