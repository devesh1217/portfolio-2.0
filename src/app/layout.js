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
  title: 'Portfolio | NIT Surat Graduate',
  description: 'Portfolio of a calm, focused software developer and technology explorer with a passion for ancient texts and Sanskrit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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