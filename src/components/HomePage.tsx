import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImg from '@/assets/logo.jpg';

interface HomePageProps {
  onPageChange: (page: 'menu') => void;
}

export const HomePage = ({ onPageChange }: HomePageProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className={`flex-1 text-center lg:text-${language === 'ar' ? 'right' : 'left'} animate-fade-in`}>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-primary">{t('welcome')}</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t('restaurantName')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {t('subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => onPageChange('menu')}
                >
                  {t('orderNow')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => onPageChange('menu')}
                >
                  {t('viewMenu')}
                </Button>
              </div>
            </div>

            {/* Enhanced Logo/Brand Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-md">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-gold/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 group-hover:duration-300"></div>
                
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main logo container */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/90 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:border-primary/30">
                  <CardContent className="p-6 md:p-8">
                    <div className="relative">
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 dark:bg-primary/5 rounded-full filter blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/10 dark:bg-gold/5 rounded-full filter blur-xl animate-pulse delay-1000"></div>
                      
                      {/* Logo image with enhanced styling */}
                      <div className="relative z-10 p-2">
                        <div className="relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-900/50 p-6 shadow-inner">
                          <img
                            src={logoImg}
                            alt={t('restaurantName')}
                            className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
                            style={{
                              filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15))',
                              maxHeight: '280px'
                            }}
                            loading="eager"
                          />
                        </div>
                        
                        {/* Restaurant name below logo */}
                        <div className="mt-6 text-center">
                          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                            {t('restaurantName')}
                          </h2>
                          <p className="mt-2 text-sm text-muted-foreground font-medium">
                          
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Floating elements */}
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-md animate-float"></div>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gold/20 rounded-full blur-md animate-float animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🍽️
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('authenticTaste')}</h3>
                <p className="text-muted-foreground">{t('authenticTaste')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚚
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('fastDelivery')}</h3>
                <p className="text-muted-foreground">{t('fastDelivery')}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-card rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  ⭐
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('freshIngredients')}</h3>
                <p className="text-muted-foreground">{t('freshIngredients')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};