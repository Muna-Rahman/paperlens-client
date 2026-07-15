import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer'; 

export const metadata = {
  title: 'PaperLens',
  description: 'Premium Research Similarity Engine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   
      <body className="bg-[#0A1626] text-[#F5F5F5] min-h-screen flex flex-col">
        <AuthProvider>
          <Navbar />
          
         
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer /> 
        </AuthProvider>
      </body>
    </html>
  );
}