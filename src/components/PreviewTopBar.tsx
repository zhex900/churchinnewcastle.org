import Link from 'next/link';
import * as React from 'react';

import { AppContext } from '@/context/AppContext';

export default function PreviewTopBar() {
  const { preview } = React.useContext(AppContext);

  if (!preview) return null;
  return (
    <div className='bg-accent-7 border-accent-7 bg-rose-400 text-white'>
      <div className='container mx-auto px-5'>
        <div className='py-2 text-center text-sm'>
          <>
            Preview mode
            <Link
              href='/api/exit-preview'
              className='hover:text-cyan font-bold underline transition-colors duration-200'
            >
              Exit
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}
