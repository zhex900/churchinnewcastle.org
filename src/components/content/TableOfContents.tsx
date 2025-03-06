import * as React from 'react';

import TOCLink from '@/components/links/TOCLink';

import { AppContext } from '@/context/AppContext';

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
  minLevel: number;
};

export default function TableOfContents({
  toc,
  activeSection,
  minLevel,
}: TableOfContentsProps) {
  const lastPosition = React.useRef<number>(0);

  React.useEffect(() => {
    const container = document.getElementById('toc-container');
    const activeLink = document.getElementById(`link-${activeSection}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        // Scroll by the whole clientHeight
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  return (
    <div
      id='toc-container'
      className='hidden max-h-[calc(100vh-9rem-113px)] overflow-auto pb-4 lg:block'
    >
      <h3 className='text-gray-900 dark:text-gray-100 md:text-2xl'>
        Table of contents
      </h3>
      <div className='mt-4 flex flex-col space-y-1 text-base'>
        {toc
          ? toc.map(({ id, level, text }) => (
              <TOCLink
                id={id}
                key={`${level}-${text.substring(10).replace(/\W/g, '')}`}
                activeSection={activeSection}
                level={level}
                minLevel={minLevel}
                text={text}
              />
            ))
          : null}
      </div>
    </div>
  );
}
