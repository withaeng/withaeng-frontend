import variables from '@/styles/variables.module.scss';

export default function HomePage() {
  return (
    <>
      {/* 1. tailwind css로 custom 등록한 font 적용법 */}
      <h1 className='text-display-02'>같이의 가치를 위해</h1>
      {/* 2. scss style 적용법 */}
      <h2 className={variables.title}>Sass 적용</h2>
    </>
  );
}
