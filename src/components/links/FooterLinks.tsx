import { useEffect, useState } from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';

import UnstyledLink from '@/components/links/UnstyledLink';

import { footerLinks, headerLinks } from '@/content';

export default function FooterLinks() {
  const isMobile = useMediaQuery();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div />;

  let links = footerLinks as { href: string; label: string }[];
  if (isMobile) {
    links = [
      ...headerLinks.filter(({ mobile }) => !mobile),
      ...(footerLinks || []),
    ];
  }
  return (
    <div
      className='flex flex-wrap justify-center gap-y-4 gap-x-8'
      aria-label='footer label'
    >
      {links?.map(({ href, label }) => (
        <UnstyledLink
          key={href}
          className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
          href={href}
        >
          {label}
        </UnstyledLink>
      ))}
    </div>
  );
}
