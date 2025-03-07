import Accent from '@/components/Accent';
import ContactUsCard from '@/components/cards/ContactUsCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactUsPage() {
  return (
    <Layout>
      <Seo templateTitle={'Contact us'} description={'Contact us'} />

      <main>
        <section className=''>
          <div className='layout flex flex-col items-center py-20 text-center'>
            <h1>
              <Accent>Contact Us</Accent>
            </h1>
            <ContactUsCard className='mt-8 text-left' />
          </div>
        </section>
      </main>
    </Layout>
  );
}
