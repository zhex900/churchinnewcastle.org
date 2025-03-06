import clsx from 'clsx';
import NextImage from 'next/image';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { InView } from 'react-intersection-observer';

import { generateRss } from '@/lib/rss';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import PostCard from '@/components/cards/PostCard';
import { Carousel } from '@/components/Carousel';
import HeroImage from '@/components/images/HeroImage';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import Tooltip from '@/components/Tooltip';

import { address, homePageAboutUsSlides, phone } from '@/content';

import { PostType } from '@/types/types';

export default function IndexPage({
  currentEvents,
}: {
  currentEvents: PostType[];
  featuredPosts: PostType[];
}) {
  const isLoaded = useLoaded();
  return (
    <Layout>
      <Seo />
      <StructuredData address={address} phone={phone} />
      <main>
        <section
          className={clsx(
            'min-h-main mb-20 -mt-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <article className='layout'>
            <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
              Welcome!
            </h2>
            <h1
              className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
              data-fade='2'
            >
              To the church in <Accent>Newcastle</Accent>
            </h1>
            <p
              className={clsx(
                'mt-4 w-2/3 text-gray-700 dark:text-gray-200 md:mt-6',
                'md:text-xl 2xl:text-2xl'
              )}
              data-fade='3'
            >
              We are believers in the Lord Jesus Christ and would like to invite
              you to join us as we grow in Him through His word.
            </p>

            <div
              data-fade='5'
              className='mt-8 flex flex-wrap gap-4 md:!text-lg'
            >
              <div className='group relative'>
                <div
                  className={clsx(
                    'absolute -inset-0.5 animate-tilt rounded blur',
                    'bg-gradient-to-r from-primary-300 to-primary-400',
                    'dark:from-primary-200 dark:via-primary-300',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <ButtonLink href='#meetings'>Meetings</ButtonLink>
              </div>
              <ButtonLink href='#about-us'>About us</ButtonLink>
            </div>
          </article>
          <HeroImage
            className={clsx(
              'absolute top-1/4 right-0 rotate-[6.00rad] md:bottom-10',
              'w-[calc(100%-223rem)] md:w-[650px] 2xl:w-[700px]',
              'opacity-35 z-[-1] dark:opacity-40'
            )}
          />
          <UnstyledLink
            href='#about-us'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            {IoArrowDownOutline({
              className: 'h-8 w-8 animate-bounce md:h-10 md:w-10',
            })}
          </UnstyledLink>
        </section>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              id='about-us'
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article
                className={clsx(
                  'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                  'md:gap-4'
                )}
                data-fade='0'
              >
                <div className='mt-8 h-full w-full md:mt-0'>
                  <h2 className='text-4xl md:text-6xl'>
                    <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                      Who we are
                    </Accent>
                  </h2>
                  <div className='mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg'>
                    The{' '}
                    <Tooltip
                      withUnderline
                      tipChildren={<>Acts: 8:1; Rev. 1:11</>}
                    >
                      <span>church in Newcastle</span>
                    </Tooltip>{' '}
                    is not our name—it’s our description. As such, it’s an
                    inclusive title, not an exclusive one. We gather together
                    simply as believers of the Lord in this city, and we receive
                    as our brothers and sisters all who believe in Jesus Christ.
                    Likewise, we warmly welcome guests and visitors who are not
                    Christians.
                  </div>
                </div>
                <div className='h-full w-full pl-40 '>
                  <Carousel autoSlide={true}>
                    {[
                      ...homePageAboutUsSlides.map((url) => (
                        <NextImage
                          key={url}
                          width={2000}
                          height={800}
                          src={`${url}`}
                          alt={url}
                          title={url}
                          className='rounded-lg'
                        />
                      )),
                    ]}
                  </Carousel>
                </div>
              </article>
            </section>
          )}
        </InView>
        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              id='meetings'
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='blog'>
                  <Accent>Weekly meetings</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {[
                    {
                      banner: 'https://picsum.photos/id/14/960/540',
                      slug: '',
                      title: 'Prayer meeting',
                      summary: 'Wednesday at 7:30pm',
                      body: '',
                      tags: ['meetings'],
                      dateCreated: '2021-09-01',
                      start: '2021-09-01',
                    },
                    {
                      banner: 'https://picsum.photos/id/24/960/540',
                      slug: '',
                      title: 'Home bible study',
                      summary: 'Friday with dinner at 6:30pm',
                      body: '',
                      tags: ['meetings'],
                      dateCreated: '2021-09-01',
                      start: '2021-09-01',
                    },
                    {
                      banner: 'https://picsum.photos/id/25/960/540',
                      slug: '',
                      title: 'Worship',
                      summary: 'Sunday at 10:30am',
                      body: '',
                      tags: ['meetings'],
                      dateCreated: '2021-09-01',
                      start: '2021-09-01',
                    },
                  ].map((post, i) => (
                    <PostCard
                      key={post.slug}
                      post={post}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
              </article>
            </section>
          )}
        </InView>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  generateRss();

  return {
    props: {
      currentEvents: [], //await getPostsByTags(['Event'], locale),
      featuredPosts: [], //await getPostsByTags(['Featured'], locale),
    },
  };
}
