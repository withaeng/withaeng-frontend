'use client';

import React from 'react';
import WhButton from '../ui-elements/WhButton';

const page = () => {
  return (
    <div className='m-6'>
      <h1 className='py-4'> this is Button page</h1>
      <div className='flex gap-16'>
        {/* left button */}
        <div>
          <section className='flex flex-col gap-4'>
            <h2>BTN TYPE - LARGE</h2>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} large/>
              <WhButton label='버튼명 입력' onClick={() => {}} large/>
              <WhButton label='버튼명 입력' onClick={() => {}} large/>
            </div>

            {/* disabled */}
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled large/>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled large/>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled large/>
            </div>
          </section>

          <section className='mt-20 flex flex-col gap-4'>
            <h2>BTN TYPE - MIDDLE </h2>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} />
              <WhButton label='버튼명 입력' onClick={() => {}} />
              <WhButton label='버튼명 입력' onClick={() => {}} />
            </div>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled />
              <WhButton label='버튼명 입력' onClick={() => {}} disabled />
              <WhButton label='버튼명 입력' onClick={() => {}} disabled />
            </div>
          </section>

          <section className='mt-20 flex flex-col gap-4'>
            <h2>BTN TYPE - SMALL</h2>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} small/>
              <WhButton label='버튼명 입력' onClick={() => {}} small/>
              <WhButton label='버튼명 입력' onClick={() => {}} small/>
            </div>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled small/>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled small/>
              <WhButton label='버튼명 입력' onClick={() => {}} disabled small/>
            </div>
          </section>
        </div>

        {/* right button - outline*/}
        <div>
          <section className='flex flex-col gap-4'>
            <h2>BTN TYPE OUTLINE LARGE</h2>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} outLine large/>
              <WhButton label='버튼명 입력' onClick={() => {}} outLine large/>
              <WhButton label='버튼명 입력' onClick={() => {}} outLine large/>
            </div>

            {/* disabled */}
            <div className='flex gap-8'>
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
                large
              />
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
                large
              />
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
                large
              />
            </div>
          </section>

          <section className='mt-20 flex flex-col gap-4'>
            <h2>BTN TYPE OUTLINE MIDDLE</h2>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} outLine />
              <WhButton label='버튼명 입력' onClick={() => {}} outLine />
              <WhButton label='버튼명 입력' onClick={() => {}} outLine />
            </div>
            <div className='flex gap-8'>
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
              />
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
              />
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
              />
            </div>
          </section>

          <section className='mt-20 flex flex-col gap-4'>
            <h2>BTN TYPE OUTLINE - SMALL </h2>
            <div className='flex gap-8'>
              <WhButton label='버튼명 입력' onClick={() => {}} outLine small />
              <WhButton label='버튼명 입력' onClick={() => {}} outLine small />
              <WhButton label='버튼명 입력' onClick={() => {}} outLine small />
            </div>
            <div className='flex gap-8'>
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
                small
              />
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
                small
              />
              <WhButton
                label='버튼명 입력'
                onClick={() => {}}
                outLine
                disabled
                small
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
