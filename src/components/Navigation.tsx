import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface NavigationProps {
  currentPage: 'home' | 'menu' | 'cart';
  onPageChange: (page: 'home' | 'menu' | 'cart') => void;
}

export const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { itemCount } = useCart();

  const languages = [
    { code: 'ar' as const, name: t('arabic'), flag: '🇸🇦' },
    { code: 'en' as const, name: t('english'), flag: '🇺🇸' },
    { code: 'ku' as const, name: t('kurdish'), flag: '🟨' }
  ];

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-foreground">
              {t('restaurantName')}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant={currentPage === 'home' ? 'gold' : 'ghost'}
              onClick={() => onPageChange('home')}
              className="text-primary-foreground hover:text-gold"
            >
              {t('home')}
            </Button>
            <Button
              variant={currentPage === 'menu' ? 'gold' : 'ghost'}
              onClick={() => onPageChange('menu')}
              className="text-primary-foreground hover:text-gold"
            >
              {t('menu')}
            </Button>
            <Button
              variant={currentPage === 'cart' ? 'gold' : 'ghost'}
              onClick={() => onPageChange('cart')}
              className="text-primary-foreground hover:text-gold relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {t('cart')}
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gold text-gold-foreground min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-gold">
                  <Globe className="w-4 h-4 mr-2" />
                  {languages.find(lang => lang.code === language)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border shadow-elegant">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer hover:bg-muted"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary/10 backdrop-blur-sm rounded-lg mt-2 mb-4 p-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Button
                variant={currentPage === 'home' ? 'gold' : 'ghost'}
                onClick={() => {
                  onPageChange('home');
                  setIsMenuOpen(false);
                }}
                className="justify-start text-primary-foreground"
              >
                {t('home')}
              </Button>
              <Button
                variant={currentPage === 'menu' ? 'gold' : 'ghost'}
                onClick={() => {
                  onPageChange('menu');
                  setIsMenuOpen(false);
                }}
                className="justify-start text-primary-foreground"
              >
                {t('menu')}
              </Button>
              <Button
                variant={currentPage === 'cart' ? 'gold' : 'ghost'}
                onClick={() => {
                  onPageChange('cart');
                  setIsMenuOpen(false);
                }}
                className="justify-start text-primary-foreground relative"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t('cart')}
                {itemCount > 0 && (
                  <Badge className="ml-auto bg-gold text-gold-foreground">
                    {itemCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-primary-foreground/20">
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={language === lang.code ? 'gold' : 'ghost'}
                      size="sm"
                      onClick={() => setLanguage(lang.code)}
                      className="text-primary-foreground"
                    >
                      <span className="mr-1">{lang.flag}</span>
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};