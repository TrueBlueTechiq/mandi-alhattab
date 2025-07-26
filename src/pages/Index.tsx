import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HomePage } from '@/components/HomePage';
import { MenuPage } from '@/components/MenuPage';
import { CartPage } from '@/components/CartPage';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'cart'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'menu':
        return <MenuPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
