import WhTooltip from '@/components/elements/WhTooltip';

export default function Page() {
  return (
    <div className='flex gap-8 m-20'>
      <WhTooltip position='top' coreText='동행' content='을 직접 찾아볼까요?'>
        top일 경우 *(hover 시 노출)
      </WhTooltip>
      <WhTooltip
        position='bottom'
        coreText='동행'
        content='을 직접 찾아볼까요?'
      >
        bottom일 경우 *(hover 시 노출)
      </WhTooltip>
    </div>
  );
}
