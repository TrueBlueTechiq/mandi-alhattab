import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { menuItems } from '@/data/menuData';
import { useToast } from '@/hooks/use-toast';

export const MenuPage = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: t(item.nameKey),
      price: item.price,
      image: item.image
    });
    
    toast({
      title: "تمت الإضافة للسلة",
      description: `تم إضافة ${t(item.nameKey)} إلى سلة التسوق`,
    });
  };

  const chickenDishes = menuItems.filter(item => item.category === 'chicken');
  const meatDishes = menuItems.filter(item => item.category === 'meat');
  const otherDishes = menuItems.filter(item => item.category === 'other');
  const appetizers = menuItems.filter(item => item.category === 'appetizers');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('menu')}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            اكتشف أشهى الأطباق الخليجية الأصيلة
          </p>
        </div>

        {/* Chicken Dishes Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">{t('chickenDishes')}</h2>
            <div className="flex-1 h-0.5 bg-gradient-primary ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {chickenDishes.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className={`text-xl font-bold text-${language === 'ar' ? 'right' : 'left'}`}> 
                    {t(item.nameKey)}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-lg font-bold text-foreground whitespace-nowrap">{formatPrice(item.price)} د.ع</span>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="gap-2 hover:scale-105 transition-transform"
                    >
                      <Plus className="w-4 h-4" />
                      {t('addToCart')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meat Dishes Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">{t('meatDishes')}</h2>
            <div className="flex-1 h-0.5 bg-gradient-primary ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {meatDishes.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className={`text-xl font-bold text-${language === 'ar' ? 'right' : 'left'}`}> 
                    {t(item.nameKey)}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-end gap-4">
                    <span className="text-lg font-bold text-foreground whitespace-nowrap">{formatPrice(item.price)} د.ع</span>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="gap-2 hover:scale-105 transition-transform"
                    >
                      <Plus className="w-4 h-4" />
                      {t('addToCart')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Dishes Section */}
        {otherDishes.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">{t('mainCourses')}</h2>
              <div className="flex-1 h-0.5 bg-gradient-primary ml-4"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherDishes.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(item.nameKey)}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className={`text-xl font-bold text-${language === 'ar' ? 'right' : 'left'}`}> 
                      {t(item.nameKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-end gap-4">
                      <span className="text-lg font-bold text-foreground whitespace-nowrap">{formatPrice(item.price)} د.ع</span>
                      <Button
                        onClick={() => handleAddToCart(item)}
                        className="gap-2 hover:scale-105 transition-transform"
                      >
                        <Plus className="w-4 h-4" />
                        {t('addToCart')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Appetizers Section */}
        {appetizers.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">{t('appetizers')}</h2>
              <div className="flex-1 h-0.5 bg-gradient-primary ml-4"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {appetizers.map((item, index) => (
                <div 
                  key={item.id}
                  className="h-full flex flex-col group"
                  style={{ animation: `fadeIn 0.3s ease-out ${index * 0.05}s both` }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
                    <div className="relative aspect-square bg-white/50 dark:bg-gray-900/30 p-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={item.image}
                        alt={t(item.nameKey)}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        style={{ maxHeight: '140px' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {formatPrice(item.price)} د.ع
                      </div>
                    </div>
                    <div className="p-3 flex-1 flex flex-col">
                      <CardHeader className="p-0 mb-2">
                        <CardTitle className={`text-sm md:text-base font-semibold line-clamp-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                          {t(item.nameKey)}
                        </CardTitle>
                      </CardHeader>
                      <div className="mt-auto">
                        <Button
                          onClick={() => handleAddToCart(item)}
                          size="sm"
                          variant="outline"
                          className="w-full gap-1.5 text-xs h-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          {t('addToCart')}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { key: 'appetizers', icon: '🥗', color: 'bg-gradient-to-br from-green-400 to-green-600' },
            { key: 'desserts', icon: '🍰', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
            { key: 'beverages', icon: '🥤', color: 'bg-gradient-to-br from-blue-400 to-blue-600' }
          ].map((section) => (
            <Card key={section.key} className="text-center p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className={`w-20 h-20 ${section.color} rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg`}>
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{t(section.key)}</h3>
                <p className="text-muted-foreground mb-4">قريباً...</p>
                <Badge variant="outline" className="bg-muted/50">
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};