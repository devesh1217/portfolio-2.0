import { ThemeProvider } from '@/components/theme-provider';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://devesh-mehta.vercel.app'),
  title: 'Devesh Chetan Mehta | Software Developer & NIT Surat Graduate',
  description: 'Portfolio of Devesh Mehta - A software developer and NIT Surat graduate, combining modern technology expertise with insights from ancient Sanskrit texts. Specialized in full-stack development and innovative solutions.',
  keywords: ['Devesh Mehta', 'software developer', 'NIT Surat', 'full-stack developer', 'Sanskrit technology', 'web development', 'portfolio'],
  authors: [{ name: 'Devesh Mehta' }],
  creator: 'Devesh Mehta',
  publisher: 'Devesh Mehta',
  openGraph: {
    title: 'Devesh Mehta | Software Developer',
    description: 'Portfolio of Devesh Mehta - Software Developer & NIT Surat Graduate',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Devesh Mehta Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devesh Mehta - Software Developer',
    creator: '@deveshmehta',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Devesh Mehta",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "National Institute of Technology, Surat"
              },
              "jobTitle": "Software Developer",
              "url": "https://deveshmehta.com",
              "sameAs": [
                "https://linkedin.com/in/deveshmehta",
                "https://github.com/deveshmehta"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col relative">
            <div className="fixed inset-0 overflow-hidden -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-100/10 to-blue-100/10 dark:from-teal-950/20 dark:to-blue-950/20"></div>
              <div className="absolute h-56 w-56 top-1/4 left-1/3 rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-3xl"></div>
              <div className="absolute h-64 w-64 bottom-1/4 right-1/3 rounded-full bg-teal-100/10 dark:bg-teal-900/5 blur-3xl"></div>
            </div>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}