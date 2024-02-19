'use client';
import { useState } from 'react';

const buttonCss = 'border-[1px] p-[4px] flex-none';

export default function Page() {
  const [color, changeFontColor] = useState('text-primary-main');
  return (
    <>
      <h1>Hello, Font Page!</h1>
      {/* primary */}
      <section className='flex flex-nowrap gap-[8px]'>
        <button
          className={`${buttonCss} text-primary-main`}
          onClick={() => changeFontColor('text-primary-main')}
        >
          primary main
        </button>
        <button
          className={`${buttonCss} text-primary-light`}
          onClick={() => changeFontColor('text-primary-light')}
        >
          primary light
        </button>
        <button
          className={`${buttonCss} text-primary-exLight`}
          onClick={() => changeFontColor('text-primary-exLight')}
        >
          primary ex-light
        </button>
        <button
          className={`${buttonCss} text-primary-pressing`}
          onClick={() => changeFontColor('text-primary-pressing')}
        >
          primary pressing
        </button>
      </section>
      {/* secondary */}
      <section className='flex flex-nowrap gap-[8px] my-[8px]'>
        <button
          className={`${buttonCss} text-secondary-main`}
          onClick={() => changeFontColor('text-secondary-main')}
        >
          secondary main
        </button>
        <button
          className={`${buttonCss} text-secondary-light`}
          onClick={() => changeFontColor('text-secondary-light')}
        >
          secondary light
        </button>
      </section>
      {/* natural black */}
      <section className='flex flex-nowrap gap-[8px]'>
        <button
          className={`${buttonCss} text-nutral-black-01`}
          onClick={() => changeFontColor('text-nutral-black-01')}
        >
          nutral black 01
        </button>
        <button
          className={`${buttonCss} text-nutral-black-02`}
          onClick={() => changeFontColor('text-nutral-black-02')}
        >
          nutral black 02
        </button>
        <button
          className={`${buttonCss} text-nutral-black-03`}
          onClick={() => changeFontColor('text-nutral-black-03')}
        >
          nutral black 03
        </button>
        <button
          className={`${buttonCss} text-nutral-black-04`}
          onClick={() => changeFontColor('text-nutral-black-04')}
        >
          nutral black 04
        </button>
        <button
          className={`${buttonCss} text-nutral-black-05`}
          onClick={() => changeFontColor('text-nutral-black-05')}
        >
          nutral black 05
        </button>
      </section>
      {/* natural white */}
      <section className='flex flex-nowrap gap-[8px] my-[8px]'>
        <button
          className={`${buttonCss} text-nutral-white-01`}
          onClick={() => changeFontColor('text-nutral-white-01')}
        >
          nutral white 01
        </button>
        <button
          className={`${buttonCss} text-nutral-white-02`}
          onClick={() => changeFontColor('text-nutral-white-02')}
        >
          nutral white 02
        </button>
        <button
          className={`${buttonCss} text-nutral-white-03`}
          onClick={() => changeFontColor('text-nutral-white-03')}
        >
          nutral white 03
        </button>
        <button
          className={`${buttonCss} text-nutral-white-04`}
          onClick={() => changeFontColor('text-nutral-white-04')}
        >
          nutral white 04
        </button>
      </section>
      {/* caption */}
      <section className='flex flex-nowrap gap-[8px]'>
        <button
          className={`${buttonCss} text-caption-main`}
          onClick={() => changeFontColor('text-caption-main')}
        >
          caption main
        </button>
        <button
          className={`${buttonCss} text-caption-light`}
          onClick={() => changeFontColor('text-caption-light')}
        >
          caption light
        </button>
      </section>
      <section className={`flex p-[8px] gap-[8px]`}>
        <div className={`flex flex-col p-[8px] ${color}`}>
          <span className='text-display-01'>Display 1</span>
          <span className='text-display-02'>Display 2</span>
          <span className='text-headline-01'>Headline 1</span>
          <span className='text-headline-02'>Headline 2</span>
          <span className='text-headline-03'>Headline 3</span>
          <span className='text-headline-04'>Headline 4</span>
        </div>
        <div className={`flex flex-col p-[8px] ${color}`}>
          <span className='text-subtitle-01'>Subtitle 1</span>
          <span className='text-subtitle-02'>Subtitle 2</span>
          <span className='text-body-01'>Body 1</span>
          <span className='text-body-02'>Body 2</span>
          <span className='text-body-03'>Body 3</span>
          <span className='text-caption-01'>Caption 1</span>
          <span className='text-caption-02'>Caption 2</span>
          <span className='text-caption-03'>Caption 3</span>
        </div>
      </section>
    </>
  );
}
