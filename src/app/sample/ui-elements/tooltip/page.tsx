import WhTooltip from '@/components/elements/WhTooltip';

export default function Page() {
  return (
    <div className='flex gap-8 m-20'>
      <WhTooltip position='top' content='content내용'>
        top일 경우 *(hover 시 노출)
      </WhTooltip>
      <WhTooltip position='right' content='content내용'>
        right일 경우 *(hover 시 노출)
      </WhTooltip>
      <WhTooltip position='bottom' content='content내용'>
        bottom일 경우 *(hover 시 노출)
      </WhTooltip>
      <WhTooltip position='left' content='content내용'>
        left일 경우 *(hover 시 노출)
      </WhTooltip>
    </div>
  );
}
