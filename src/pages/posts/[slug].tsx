import Posts, { PostsPropsType } from '@/components/Posts';

const paths = {
  events: {
    title: 'Events',
    filter: 'event',
  },
  'truth-talks': {
    title: 'Truth talks',
    filter: 'truth',
  },
} as Record<string, { title: string; filter: string }>;

export default function EventsPage({
  posts,
  slug,
  tags,
}: {
  slug: string;
  posts: PostsPropsType['posts'];
  tags: PostsPropsType['tags'];
}) {
  console.log('posts', slug, paths[slug].filter, posts);
  return (
    <Posts
      {...{
        posts,
        tags,
        title: paths[slug].title,
        filter: paths[slug].filter,
      }}
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(paths).map((p) => `/posts/${p}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      slug: params.slug,
      posts: [
        {
          banner: 'https://picsum.photos/id/24/960/540',
          slug: 'home-bible-study',
          title: 'Home bible study',
          summary: 'Friday with dinner at 6:30pm',
          body: 'adfadfa',
          tags: ['meetings', 'event'],
          dateCreated: '2021-09-01',
          start: '2021-09-01',
        },
      ],
      tags: ['event', 'meetings'], //
      settings: {},
    },
  };
}
