import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const CartPage = () => {
  const { t, language } = useLanguage();
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const { toast } = useToast();
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    diningPreference: 'inside', // 'inside' or 'custom'
    branch: '',
    tableNumber: '',
    customLocation: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  const handleSubmitOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى إدخال الاسم ورقم الهاتف",
        variant: "destructive"
      });
      return;
    }

    if (customerInfo.diningPreference === 'inside' && !customerInfo.branch) {
      toast({
        title: "معلومات ناقصة", 
        description: "يرجى اختيار الفرع",
        variant: "destructive"
      });
      return;
    }

    if (customerInfo.diningPreference === 'custom' && !customerInfo.customLocation) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى إدخال الموقع",
        variant: "destructive"
      });
      return;
    }

    // Prepare WhatsApp message
    let message = `🍽️ *طلب جديد - مندي الحطاب*\n\n`;
    message += `👤 *معلومات العميل:*\n`;
    message += `الاسم: ${customerInfo.name}\n`;
    message += `الهاتف: ${customerInfo.phone}\n\n`;

    if (customerInfo.diningPreference === 'inside') {
      message += `📍 *نوع الطلب:* داخل المطعم\n`;
      message += `🏢 *الفرع:* ${customerInfo.branch}\n`;
      if (customerInfo.tableNumber) {
        message += `🪑 *رقم الطاولة:* ${customerInfo.tableNumber}\n`;
      }
    } else {
      message += `📍 *نوع الطلب:* توصيل\n`;
      message += `🗺️ *الموقع:* ${customerInfo.customLocation}\n`;
    }

    message += `\n🛒 *الطلبات:*\n`;
    items.forEach(item => {
      message += `• ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)} د.ع\n`;
    });

    message += `\n💰 *المجموع الكلي:* ${formatPrice(total)} د.ع\n`;
    message += `\n⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-IQ')}`;

    // Send to WhatsApp
    const phoneNumber = '+9647709999460';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and form
    clearCart();
    setCustomerInfo({
      name: '',
      phone: '',
      diningPreference: 'inside',
      branch: '',
      tableNumber: '',
      customLocation: ''
    });

    toast({
      title: "تم إرسال الطلب!",
      description: "سيتم التواصل معكم قريباً",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center p-8">
          <CardContent className="pt-6">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">السلة فارغة</h2>
            <p className="text-muted-foreground mb-4">لا توجد عناصر في سلة التسوق</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Cart Items */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <ShoppingCart className="w-6 h-6" />
                  {t('yourOrder')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{item.name}</h3>
                      <p className="text-muted-foreground">{formatPrice(item.price)} د.ع</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>{t('total')}:</span>
                    <Badge className="bg-gradient-gold text-gold-foreground text-lg px-4 py-2">
                      {formatPrice(total)} د.ع
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Information */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">{t('customerInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('name')} *</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      placeholder="أدخل اسمك الكامل"
                      className="text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('phone')} *</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      placeholder="07xxxxxxxx"
                      type="tel"
                      className="text-right"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>{t('diningPreference')} *</Label>
                  <RadioGroup
                    value={customerInfo.diningPreference}
                    onValueChange={(value) => setCustomerInfo({...customerInfo, diningPreference: value})}
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="inside" id="inside" />
                      <Label htmlFor="inside">{t('insideRestaurant')}</Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">{t('customLocation')}</Label>
                    </div>
                  </RadioGroup>
                </div>

                {customerInfo.diningPreference === 'inside' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>{t('branch')} *</Label>
                      <Select
                        value={customerInfo.branch}
                        onValueChange={(value) => setCustomerInfo({...customerInfo, branch: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الفرع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="koya">{t('branch1')}</SelectItem>
                          <SelectItem value="majidi">{t('branch2')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>{t('tableNumber')} (اختياري)</Label>
                      <Select
                        value={customerInfo.tableNumber}
                        onValueChange={(value) => setCustomerInfo({...customerInfo, tableNumber: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختر رقم الطاولة" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({length: 15}, (_, i) => i + 1).map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              طاولة {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {customerInfo.diningPreference === 'custom' && (
                  <div className="space-y-2">
                    <Label htmlFor="location">{t('location')} *</Label>
                    <Textarea
                      id="location"
                      value={customerInfo.customLocation}
                      onChange={(e) => setCustomerInfo({...customerInfo, customLocation: e.target.value})}
                      placeholder="أدخل عنوانك بالتفصيل (المنطقة، اسم الشارع، رقم البيت، إلخ)"
                      className="text-right min-h-[80px]"
                    />
                  </div>
                )}

                <Button
                  onClick={handleSubmitOrder}
                  size="lg"
                  className="w-full text-lg py-6"
                >
                  {t('submitOrder')} - {formatPrice(total)} د.ع
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};