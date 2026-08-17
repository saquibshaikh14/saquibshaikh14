import PortfolioV1 from '@/components/version1';
import PortfolioV2 from '@/components/version2';

export default function Home() {
  const version = process.env.NEXT_PUBLIC_PORTFOLIO_VERSION?.toLowerCase();

  if (version === 'v1' || version === '1') {
    return <PortfolioV1 />;
  }

  return <PortfolioV2 />;
}
