import menu1Img from '@/assets/menu1.png';
import menu2Img from '@/assets/menu2.png';
import menu3Img from '@/assets/menu3.png';
import menu4Img from '@/assets/menu4.png';
import menu5Img from '@/assets/menu5.png';
import menu6Img from '@/assets/menu6.png';
import menu7Img from '@/assets/menu7.png';
import menu8Img from '@/assets/menu8.png';
import menu9Img from '@/assets/menu9.png';
import menu10Img from '@/assets/menu10.png';
import menu11Img from '@/assets/menu11.png';
import menu12Img from '@/assets/menu12.png';
import menu13Img from '@/assets/menu13.png';
import menu14Img from '@/assets/menu14.png';
import menu15Img from '@/assets/menu15.png';
import menu16Img from '@/assets/menu16.png';
import menu17Img from '@/assets/menu17.png';
import menu18Img from '@/assets/menu18.png';
import menu19Img from '@/assets/menu19.png';
import menu20Img from '@/assets/menu20.png';
import menu21Img from '@/assets/menu21.png';
import menu22Img from '@/assets/menu22.png';
import menu23Img from '@/assets/menu23.png';
import menu24Img from '@/assets/menu24.png';
import menu25Img from '@/assets/menu25.png';
import menu26Img from '@/assets/menu26.png';
import menu27Img from '@/assets/menu27.png';
import menu28Img from '@/assets/menu28.png';
import menu29Img from '@/assets/menu29.png';
import menu30Img from '@/assets/menu30.png';
import menu31Img from '@/assets/menu31.png';
import menu32Img from '@/assets/menu32.png';
import menu33Img from '@/assets/menu33.png';
import menu34Img from '@/assets/menu34.png';
import menu35Img from '@/assets/menu35.png';
import menu36Img from '@/assets/menu36.png';
import menu37Img from '@/assets/menu37.png';
import menu38Img from '@/assets/menu38.png';
import menu39Img from '@/assets/menu39.png';
import menu40Img from '@/assets/menu40.png';
import menu41Img from '@/assets/menu41.png';
import menu42Img from '@/assets/menu42.png';
import menu43Img from '@/assets/menu43.png';

export interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
  category: 'chicken' | 'meat' | 'other' | 'appetizers';
}

export const menuItems: MenuItem[] = [
  { id: 'mandi-chicken', nameKey: 'mandiChicken', descriptionKey: 'mandiChickenDesc', price: 20000, image: menu1Img, category: 'chicken' },
  { id: 'mandi-ribs', nameKey: 'mandiRibs', descriptionKey: 'mandiRibsDesc', price: 27000, image: menu2Img, category: 'meat' },
  { id: 'mandi-shoulder', nameKey: 'mandiShoulder', descriptionKey: 'mandiShoulderDesc', price: 38000, image: menu3Img, category: 'meat' },
  { id: 'mandi-lamb', nameKey: 'mandiLamb', descriptionKey: 'mandiLambDesc', price: 20000, image: menu4Img, category: 'meat' },
  { id: 'halfChickenMandi', nameKey: 'halfChicken', descriptionKey: 'halfChickenDesc', price: 11000, image: menu5Img, category: 'chicken' },
  { id: 'hanithChicken', nameKey: 'hanithChicken', descriptionKey: 'hanithChickenDesc', price: 21000, image: menu6Img, category: 'chicken' },
  { id: 'hanithShoulder', nameKey: 'hanithShoulder', descriptionKey: 'hanithShoulderDesc', price: 38000, image: menu7Img, category: 'meat' },
  { id: 'hanithMeat', nameKey: 'hanithMeat', descriptionKey: 'hanithMeatDesc', price: 21000, image: menu8Img, category: 'meat' },
  { id: 'halfHanithChicken', nameKey: 'halfHanithChicken', descriptionKey: 'halfHanithChickenDesc', price: 12000, image: menu9Img, category: 'chicken' },
  { id: 'pakistaniChicken', nameKey: 'pakistaniChicken', descriptionKey: 'pakistaniChickenDesc', price: 21000, image: menu10Img, category: 'chicken' }, // TODO: Add translation
  { id: 'qoziMeat', nameKey: 'qoziMeat', descriptionKey: 'qoziMeatDesc', price: 21000, image: menu11Img, category: 'meat' },
  { id: 'halfPakistaniChicken', nameKey: 'halfPakistaniChicken', descriptionKey: 'halfPakistaniChickenDesc', price: 12000, image: menu12Img, category: 'chicken' }, // TODO: Add translation
  { id: 'mathabiChicken', nameKey: 'mathabiChicken', descriptionKey: 'mathabiChickenDesc', price: 21000, image: menu13Img, category: 'chicken' }, // TODO: Add translation
  { id: 'mathabiRib', nameKey: 'mathabiRib', descriptionKey: 'mathabiRibDesc', price: 27000, image: menu14Img, category: 'meat' }, // TODO: Add translation
  { id: 'mathabiMeat', nameKey: 'mathabiMeat', descriptionKey: 'mathabiMeatDesc', price: 21000, image: menu15Img, category: 'meat' }, // TODO: Add translation
  { id: 'halfMathabiChicken', nameKey: 'halfMathabiChicken', descriptionKey: 'halfMathabiChickenDesc', price: 12000, image: menu16Img, category: 'chicken' }, // TODO: Add translation
  { id: 'madfoonMeat', nameKey: 'madfoonMeat', descriptionKey: 'madfoonMeatDesc', price: 21000, image: menu17Img, category: 'meat' }, // TODO: Add translation
  { id: 'makboosMeat', nameKey: 'makboosMeat', descriptionKey: 'makboosMeatDesc', price: 21000, image: menu18Img, category: 'meat' }, // TODO: Add translation
  { id: 'makboosChicken', nameKey: 'makboosChicken', descriptionKey: 'makboosChickenDesc', price: 21000, image: menu19Img, category: 'chicken' }, // TODO: Add translation
  { id: 'halfMakboosChicken', nameKey: 'halfMakboosChicken', descriptionKey: 'halfMakboosChickenDesc', price: 12000, image: menu20Img, category: 'chicken' }, // TODO: Add translation
  { id: 'qoziShoulder', nameKey: 'qoziShoulder', descriptionKey: 'qoziShoulderDesc', price: 38000, image: menu21Img, category: 'meat' }, // TODO: Add translation
  { id: 'mandiShoulderQozi', nameKey: 'mandiShoulderQozi', descriptionKey: 'mandiShoulderQoziDesc', price: 74000, image: menu22Img, category: 'meat' }, // TODO: Add translation
  { id: 'mandiShoulderQoziChicken', nameKey: 'mandiShoulderQoziChicken', descriptionKey: 'mandiShoulderQoziChickenDesc', price: 90000, image: menu23Img, category: 'other' }, // TODO: Add translation
  { id: 'mandiRibChicken', nameKey: 'mandiRibChicken', descriptionKey: 'mandiRibChickenDesc', price: 43000, image: menu24Img, category: 'other' }, // TODO: Add translation
  { id: 'mandiChickenShoulder', nameKey: 'mandiChickenShoulder', descriptionKey: 'mandiChickenShoulderDesc', price: 55000, image: menu25Img, category: 'other' }, // TODO: Add translation
  { id: 'halfMandiChickenHalfMathabiChickenHalfMadfoonChicken', nameKey: 'halfMandiChickenHalfMathabiChickenHalfMadfoonChicken', descriptionKey: 'halfMandiChickenHalfMathabiChickenHalfMadfoonChickenDesc', price: 28000, image: menu26Img, category: 'chicken' }, // TODO: Add translation
  { id: 'halfMandiChickenMandiMeat', nameKey: 'halfMandiChickenMandiMeat', descriptionKey: 'halfMandiChickenMandiMeatDesc', price: 30000, image: menu27Img, category: 'other' }, // TODO: Add translation
  { id: 'extraRice', nameKey: 'extraRice', descriptionKey: 'extraRiceDesc', price: 4000, image: menu28Img, category: 'other' }, // TODO: Add translation
  { id: 'madfoonChicken', nameKey: 'madfoonChicken', descriptionKey: 'madfoonChickenDesc', price: 21000, image: menu30Img, category: 'chicken' }, // TODO: Add translation
  // Appetizers
  { id: 'tabsi', nameKey: 'tabsi', descriptionKey: 'tabsiDesc', price: 1500, image: menu31Img, category: 'appetizers' },
  { id: 'fasoolia', nameKey: 'fasoolia', descriptionKey: 'fasooliaDesc', price: 1000, image: menu32Img, category: 'appetizers' },
  { id: 'soup', nameKey: 'soup', descriptionKey: 'soupDesc', price: 1000, image: menu33Img, category: 'appetizers' },
  { id: 'jajik', nameKey: 'jajik', descriptionKey: 'jajikDesc', price: 1000, image: menu34Img, category: 'appetizers' },
  { id: 'sahawk', nameKey: 'sahawk', descriptionKey: 'sahawkDesc', price: 1000, image: menu35Img, category: 'appetizers' },
  { id: 'nuts', nameKey: 'nuts', descriptionKey: 'nutsDesc', price: 2000, image: menu36Img, category: 'appetizers' },
  { id: 'pickles', nameKey: 'pickles', descriptionKey: 'picklesDesc', price: 1000, image: menu37Img, category: 'appetizers' },
  { id: 'yougurt', nameKey: 'yougurt', descriptionKey: 'yougurtDesc', price: 1000, image: menu38Img, category: 'appetizers' }, // TODO: Add translation
  { id: 'water', nameKey: 'water', descriptionKey: 'waterDesc', price: 500, image: menu39Img, category: 'appetizers' }, // TODO: Add translation
  { id: 'soft drinks', nameKey: 'soft drinks', descriptionKey: 'soft drinksDesc', price: 500, image: menu39Img, category: 'appetizers' }, // TODO: Add translation
];