import React from 'react';

export default function CircleProgressBar({
  circularPercentage,
  circleWidth,
  imageSrc,
}) {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * circularPercentage) / 100;
  const imageSize = 154;

  const imageX = (circleWidth - imageSize) / 2;
  const imageY = (circleWidth - imageSize) / 2;
  return (
    <div>
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
      <text
        x='50%'
        y='50%'
        dy='0.3em'
        textAnchor='middle'
        className='bg-primary-eexLight text-primary-main text-caption-01 py-1 px-2 rounded ml-[120px] mb-[32px] max-w-[42px] max-h-[22px]'
      >
        {circularPercentage}%
      </text>
    </div>
  );
}
