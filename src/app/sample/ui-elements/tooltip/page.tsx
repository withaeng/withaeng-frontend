import WhTooltip from '@/components/elements/WhTooltip';

export default function Page() {
  return (
    <div className='flex gap-52 m-20'>
      <WhTooltip position='top' coreText='동행' content='을 직접 찾아볼까요?'>
        top일 경우
      </WhTooltip>
      <WhTooltip
        position='bottom'
        coreText='동행'
        content='을 직접 찾아볼까요?'
      >
        bottom일 경우
      </WhTooltip>

      <WhTooltip
        position='top'
        content='인증된 사용자는 보다 많은 사람들에게 믿음과 안정감을 줄 수 있어요.'
      >
        인증마크 (마이페이지에 사용될 helpbox)
      </WhTooltip>
    </div>
  );
}
