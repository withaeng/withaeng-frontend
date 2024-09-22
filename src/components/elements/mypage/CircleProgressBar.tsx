import React from 'react';

const percentageWrapCss =
  'absolute bottom-0 bg-nutral-white-01  rounded-lg text-primary-main text-caption-01 py-[10px] px-1';

const percentageLabelCss =
  'bg-primary-eexLight text-primary-main text-caption-01 py-1 px-3 max-h-[22px] rounded';
interface CircleProgressBarProps {
  circularPercentage: number;
  circleWidth: number;
  imageSrc: string;
}

export default function CircleProgressBar({
  circularPercentage,
  circleWidth,
  imageSrc = '',
}: CircleProgressBarProps) {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * circularPercentage) / 100;
  const imageSize = 154;

  const imageX = (circleWidth - imageSize) / 2;
  const imageY = (circleWidth - imageSize) / 2;
  return (
    <div className='relative flex flex-col items-center'>
      <svg
        width={156}
        height={156}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth='6.12px'
          r={radius}
          className='fill-none stroke-nutral-white-03'
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth='6.12px'
          r={radius}
          className='fill-none stroke-primary-main'
          transform={`rotate(90 ${circleWidth / 2} ${circleWidth / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />

        <image
          xlinkHref={imageSrc}
          x={imageX}
          y={imageY}
          width={imageSize}
          height={imageSize}
        />
      </svg>
      <div className={percentageWrapCss}>
        <span className={percentageLabelCss}>{circularPercentage}% 완성</span>
      </div>
    </div>
  );
}
