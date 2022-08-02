import * as React from 'react';

const SvgComponent = ({ className }: { className: string }) => {
  return (
    <svg
      height='100px'
      width='100px'
      xmlns='http://www.w3.org/2000/svg'
      data-name='Layer 1'
      viewBox='0 0 100 100'
      x='0px'
      y='0px'
      className={className}
    >
      <path d='M81.85,31,99.22,44.75l-7.5,9.51L50,21.32,8.28,54.25.78,44.75,50,5.89,69.74,21.47v-8H81.85Zm1.42,43.55a9.54,9.54,0,1,0-10.73,0,14,14,0,0,0-5.11,3.66A18.92,18.92,0,0,0,57.14,67.79a12.87,12.87,0,1,0-14.46,0A18.92,18.92,0,0,0,32.39,78.25a14,14,0,0,0-5.11-3.66,9.54,9.54,0,1,0-10.72,0A14,14,0,0,0,7.93,87.51v4.63a2,2,0,0,0,2,2h80a2,2,0,0,0,2-2V87.51A14,14,0,0,0,83.27,74.59Z'></path>
    </svg>
  );
};

export default SvgComponent;