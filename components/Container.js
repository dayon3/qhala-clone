import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Nav from './Nav';
import Footer from './Footer';

import pattern from '../public/images/Top Pattern.svg';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Qhala',
    description: `Qhala works with organizations to co-create products, services and new business models. Our approach ties together strategy, research, design and technology to solve today's needs and future goals.`,
    // image: 'https://qhala-clone.vercel.app/images/ogImageBanner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="antialiased bg-white dark:bg-gray-900 min-h-screen">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://lima.ag${router.asPath}`} />
        <link rel="canonical" href={`https://lima.ag${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Qhala" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* TODO: <meta name="twitter:site" content="@qhala" /> */}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <header className="z-30 w-full">
        {/* bg-opacity-50 backdrop-filter backdrop-blur */}
        <img src="/images/Top Pattern.svg" className="w-full" />
        <Nav />
      </header>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
