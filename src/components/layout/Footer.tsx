import ContactUsLinks from '@/components/links/ContactUsLinks';
import FooterLinks from '@/components/links/FooterLinks';

export default function Footer() {
  return (
    <footer className='w-full pb-2'>
      <main className='layout flex flex-col items-center border-t border-gray-600 pt-6 dark:border-gray-300'>
        <FooterLinks />

        <ContactUsLinks
          email={'info@churchinnewcastle.org'}
          address={'Newcastle Australia'}
          phone={'0433 169 153'}
        />

        <p
          suppressHydrationWarning
          className='mt-8 text-sm text-gray-600 dark:text-gray-300'
        >
          {new Date().getFullYear()} © Church in Newcastle
          {' • '}
          All Rights Reserved
        </p>
      </main>
    </footer>
  );
}
