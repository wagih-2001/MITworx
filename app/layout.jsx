import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/Home/WhatsappButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <Navbar />
        <main>{children}</main>
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
