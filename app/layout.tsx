import type { Metadata, Viewport } from 'next';
import { Archivo_Black, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#04040A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://msaquib.com'),
  title: {
    default: 'Mohammad Saquib | Senior Software Engineer',
    template: '%s | Mohammad Saquib',
  },
  description:
    'Senior Software Engineer with 4.8+ years of experience engineering scalable web applications, microservices, and AI solutions using Node.js, TypeScript, and React. Experienced in payment integrations and cloud-native APIs.',
  applicationName: 'Mohammad Saquib Portfolio',
  keywords: [
    'Mohammad Saquib',
    'Saquib Shaikh',
    'Mohammad Saquib Senior Software Engineer',
    'Saquib Shaikh Developer',
    'msaquib.com',
    'Senior Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'AI Solutions',
    'Microservices',
    'Express.js',
    'NestJS',
    'Redux',
    'RTK',
    'Google Cloud Platform',
    'GCP',
    'AWS',
    'MongoDB',
    'SQL',
    'REST APIs',
    'OpenAPI',
    'CyberSource Payment Gateway',
    'Payment Integration',
  ],
  authors: [
    {
      name: 'Mohammad Saquib',
      url: 'https://msaquib.com',
    },
  ],
  creator: 'Mohammad Saquib',
  publisher: 'Mohammad Saquib',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://msaquib.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://msaquib.com',
    siteName: 'Mohammad Saquib Portfolio',
    title: 'Mohammad Saquib | Senior Software Engineer',
    description:
      'Senior Software Engineer with 4.8+ years of experience in Node.js, TypeScript, React, cloud services, and AI solutions.',
    images: [
      {
        url: 'https://msaquib.com/assets/b.jpg',
        width: 800,
        height: 800,
        alt: 'Mohammad Saquib - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Saquib | Senior Software Engineer',
    description:
      'Explore the portfolio, projects, and software engineering experience of Mohammad Saquib (msaquib.com).',
    images: ['https://msaquib.com/assets/b.jpg'],
    creator: '@saquibshaikh14',
  },
  icons: {
    icon: '/assets/b.jpg',
    shortcut: '/assets/b.jpg',
    apple: '/assets/b.jpg',
  },
  category: 'technology',
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://msaquib.com/#person',
      name: 'Mohammad Saquib',
      alternateName: ['Saquib Shaikh', 'Saquib', 'Mohammad Saquib Shaikh'],
      givenName: 'Mohammad',
      familyName: 'Saquib',
      url: 'https://msaquib.com',
      image: 'https://msaquib.com/assets/b.jpg',
      jobTitle: 'Senior Software Engineer',
      description:
        'Senior Software Engineer with 4.8+ years of experience engineering scalable web applications, microservices, and AI solutions using Node.js, TypeScript, and React.',
      email: 'mailto:saquibmd82@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/saquibshaikh14',
        'https://github.com/saquibshaikh14',
        'https://msaquib.com',
      ],
      knowsAbout: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'React Native',
        'Redux',
        'RTK',
        'Node.js',
        'Express.js',
        'NestJS',
        'Microservices',
        'AI Solutions',
        'Webhooks & APIs',
        'OpenAPI / Swagger',
        'Google Cloud Platform',
        'AWS',
        'MongoDB',
        'SQL',
        'Payment Gateway Integrations',
        'CyberSource',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'B.Tech in Computer Science & Engineering',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://msaquib.com/#website',
      url: 'https://msaquib.com',
      name: 'Mohammad Saquib - Senior Software Engineer Portfolio',
      description:
        'Official portfolio website of Mohammad Saquib showcasing full-stack projects, technical expertise, and contact details.',
      publisher: {
        '@id': 'https://msaquib.com/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://msaquib.com/#profilepage',
      url: 'https://msaquib.com',
      name: 'Mohammad Saquib | Senior Software Engineer',
      isPartOf: {
        '@id': 'https://msaquib.com/#website',
      },
      mainEntity: {
        '@id': 'https://msaquib.com/#person',
      },
      about: {
        '@id': 'https://msaquib.com/#person',
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className={`${archivoBlack.variable} ${inter.variable} ${jetbrainsMono.variable} ${inter.className} bg-[#04040A] text-[#F0EEFF] min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
