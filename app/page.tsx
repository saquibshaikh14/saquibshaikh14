import dynamic from 'next/dynamic';

const isV1 =
  process.env.NEXT_PUBLIC_PORTFOLIO_VERSION === 'v1' ||
  process.env.NEXT_PUBLIC_PORTFOLIO_VERSION === '1';

const Portfolio = dynamic(
  () => (isV1 ? import('@/components/version1') : import('@/components/version2')),
  { ssr: true }
);

export default function Home() {
  return <Portfolio />;
}

