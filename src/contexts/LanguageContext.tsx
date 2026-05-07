import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    gallery: 'Gallery',
    reviews: 'Reviews',
    location: 'Location',
    bookTable: 'Book a Table',
    signIn: 'Sign In',
    signUp: 'Sign Up',

    // Hero
    heroHeadline: 'Modern dining, crafted with warmth.',
    heroSubheadline: 'Enjoy chef-crafted dishes, seasonal ingredients, and a refined atmosphere made for memorable nights.',
    exploreMenu: 'Explore Menu',
    trustLine: 'Open daily · Fresh seasonal menu · Family friendly',
    rating: 'from 1,200+ guests',
    chefSpecial: "Chef's Special",
    todaySelection: "Today’s selection",

    // Categories
    dinner: 'Dinner',
    brunch: 'Brunch',
    desserts: 'Desserts',
    drinks: 'Drinks',

    // Quick Info
    openDaily: 'Open Daily',
    openingHours: '10:00 AM – 11:30 PM',
    locationTitle: 'Location',
    locationAddress: 'Downtown, Main Street',
    reservations: 'Reservations',
    reservationsInfo: 'Online booking available',
    takeaway: 'Takeaway',
    takeawayInfo: 'Freshly packed orders',

    // Featured Dishes
    featuredTitle: 'Signature dishes people come back for.',
    dish1: 'Truffle Mushroom Pasta',
    dish1Desc: 'Creamy pasta with wild mushrooms and black truffle',
    dish2: 'Charcoal Grilled Steak',
    dish2Desc: 'Premium beef with herb butter and roasted vegetables',
    dish3: 'Citrus Herb Salmon',
    dish3Desc: 'Pan-seared salmon with citrus glaze and seasonal greens',
    dish4: 'Pistachio Rose Dessert',
    dish4Desc: 'Delicate layers of pistachio cream and rose water',
    chefChoice: "Chef's Choice",
    popular: 'Popular',

    // Menu
    starters: 'Starters',
    mainCourses: 'Main Courses',
    viewFullMenu: 'View Full Menu',

    // About
    aboutStory: 'Built around simple ingredients, careful technique, and warm hospitality, Maison Dine brings people together over food that feels both familiar and refined.',
    yearsExperience: '12+ Years of Experience',
    seasonalDishes: '40+ Seasonal Dishes',
    happyGuests: '1,200+ Happy Guests',

    // Benefits
    whyChooseUs: 'Why choose us',
    benefit1: 'Fresh Seasonal Ingredients',
    benefit1Desc: 'We source the finest seasonal produce for every dish',
    benefit2: 'Chef-crafted Menu',
    benefit2Desc: 'Every recipe is carefully designed by our expert chefs',
    benefit3: 'Elegant Atmosphere',
    benefit3Desc: 'Warm and refined ambiance perfect for any occasion',
    benefit4: 'Easy Online Booking',
    benefit4Desc: 'Reserve your table in seconds through our website',

    // Gallery
    galleryTitle: 'Experience Maison Dine',
    freshPlates: 'Fresh plates',
    cozyNights: 'Cozy nights',
    craftedDrinks: 'Crafted drinks',
    sweetEndings: 'Sweet endings',

    // Reviews
    reviewsTitle: 'Loved by guests who value good food.',
    review1: 'The atmosphere is calm, the food is balanced, and the booking process was effortless.',
    review2: 'One of the few places where every detail feels intentional.',
    review3: 'Perfect for dinner with family or a quiet evening with friends.',
    guest1: 'Sarah M.',
    guest2: 'James K.',
    guest3: 'Layla A.',

    // Booking
    bookingTitle: 'Reserve Your Table',
    name: 'Name',
    phone: 'Phone',
    date: 'Date',
    time: 'Time',
    guests: 'Guests',
    message: 'Message (optional)',
    reserveTable: 'Reserve Your Table',
    confirmationNote: 'We will confirm your reservation shortly.',

    // Location
    address: 'Address',
    contactPhone: 'Contact',
    email: 'Email',
    getDirections: 'Get Directions',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'Do I need to book before visiting?',
    faq1A: 'While walk-ins are welcome, we recommend booking in advance to ensure table availability, especially during peak hours.',
    faq2Q: 'Do you offer vegetarian options?',
    faq2A: 'Yes, we have a variety of vegetarian dishes made with fresh seasonal ingredients.',
    faq3Q: 'Is the restaurant family friendly?',
    faq3A: 'Absolutely! We welcome families and have options suitable for children.',
    faq4Q: 'Do you offer takeaway?',
    faq4A: 'Yes, all our dishes are available for takeaway with elegant packaging.',
    faq5Q: 'Can I host private events?',
    faq5A: 'Yes, we offer private dining for special occasions. Please contact us for more details.',

    // Final CTA
    finalCtaTitle: 'Ready for your next favorite dinner?',
    finalCtaSubtitle: 'Book your table today and enjoy a warm dining experience from the first bite.',

    // Footer
    footerDescription: 'Maison Dine is a modern restaurant experience built around seasonal dishes, warm hospitality, and elegant details.',
    followUs: 'Follow Us',
    newsletter: 'Newsletter',
    newsletterPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',

    // Auth
    welcomeBack: 'Welcome back',
    signInSubtitle: 'Sign in to manage your reservations and dining preferences.',
    createAccount: 'Create your dining account',
    signUpSubtitle: 'Save your details, manage bookings, and enjoy a smoother restaurant experience.',
    emailAddress: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot password?',
    noAccount: "Don't have an account?",
    haveAccount: 'Already have an account?',
    signInWithGoogle: 'Sign in with Google',
    signUpWithGoogle: 'Sign up with Google',
    trustNote: 'No spam. Only reservation updates and restaurant offers.',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    menu: 'القائمة',
    about: 'من نحن',
    gallery: 'المعرض',
    reviews: 'التقييمات',
    location: 'الموقع',
    bookTable: 'احجز طاولة',
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',

    // Hero
    heroHeadline: 'تجربة طعام عصرية بطابع دافئ.',
    heroSubheadline: 'استمتع بأطباق محضّرة بعناية، مكونات موسمية، وأجواء راقية تناسب لحظاتك المميزة.',
    exploreMenu: 'تصفح القائمة',
    trustLine: 'مفتوح يوميًا · قائمة موسمية طازجة · مناسب للعائلة',
    rating: 'من أكثر من 1,200 ضيف',
    chefSpecial: 'اختيار الشيف',
    todaySelection: 'اختيار اليوم',

    // Categories
    dinner: 'عشاء',
    brunch: 'فطور متأخر',
    desserts: 'حلويات',
    drinks: 'مشروبات',

    // Quick Info
    openDaily: 'مفتوح يوميًا',
    openingHours: '10:00 صباحًا – 11:30 مساءً',
    locationTitle: 'الموقع',
    locationAddress: 'وسط المدينة، الشارع الرئيسي',
    reservations: 'الحجوزات',
    reservationsInfo: 'الحجز متاح عبر الموقع',
    takeaway: 'الطلبات الخارجية',
    takeawayInfo: 'تغليف طازج وأنيق',

    // Featured Dishes
    featuredTitle: 'أطباق مميزة يعود لها الزوار دائمًا.',
    dish1: 'باستا الفطر والكمأة',
    dish1Desc: 'باستا كريمية مع فطر بري وكمأة سوداء',
    dish2: 'ستيك مشوي على الفحم',
    dish2Desc: 'لحم بقري ممتاز مع زبدة الأعشاب وخضروات مشوية',
    dish3: 'سلمون بالأعشاب والحمضيات',
    dish3Desc: 'سلمون محمّر مع صلصة حمضيات وخضار موسمية',
    dish4: 'حلوى الفستق والورد',
    dish4Desc: 'طبقات رقيقة من كريمة الفستق وماء الورد',
    chefChoice: 'اختيار الشيف',
    popular: 'الأكثر طلبًا',

    // Menu
    starters: 'المقبلات',
    mainCourses: 'الأطباق الرئيسية',
    viewFullMenu: 'عرض القائمة كاملة',

    // About
    aboutStory: 'نؤمن أن الطعام الجيد يبدأ من مكونات بسيطة، عناية في التحضير، وضيافة دافئة تجعل كل زيارة تجربة تستحق التكرار.',
    yearsExperience: 'أكثر من 12 سنة خبرة',
    seasonalDishes: 'أكثر من 40 طبق موسمي',
    happyGuests: 'أكثر من 1,200 ضيف سعيد',

    // Benefits
    whyChooseUs: 'لماذا تختارنا',
    benefit1: 'مكونات موسمية طازجة',
    benefit1Desc: 'نستخدم أفضل المنتجات الموسمية في كل طبق',
    benefit2: 'قائمة محضّرة بعناية',
    benefit2Desc: 'كل وصفة مصممة بعناية من قبل طهاتنا المحترفين',
    benefit3: 'أجواء أنيقة ومريحة',
    benefit3Desc: 'أجواء دافئة وراقية مناسبة لجميع المناسبات',
    benefit4: 'حجز سهل عبر الموقع',
    benefit4Desc: 'احجز طاولتك في ثوانٍ عبر موقعنا الإلكتروني',

    // Gallery
    galleryTitle: 'استكشف ميزون داين',
    freshPlates: 'أطباق طازجة',
    cozyNights: 'أمسيات دافئة',
    craftedDrinks: 'مشروبات محضّرة بعناية',
    sweetEndings: 'ختام حلو',

    // Reviews
    reviewsTitle: 'محبوب من ضيوف يقدّرون الطعام الجيد.',
    review1: 'الأجواء هادئة، الطعام متوازن، والحجز كان سهلًا جدًا.',
    review2: 'من الأماكن القليلة التي تشعر أن كل تفصيلة فيها مدروسة.',
    review3: 'مناسب لعشاء عائلي أو أمسية هادئة مع الأصدقاء.',
    guest1: 'سارة م.',
    guest2: 'جيمس ك.',
    guest3: 'ليلى أ.',

    // Booking
    bookingTitle: 'احجز طاولتك',
    name: 'الاسم',
    phone: 'رقم الهاتف',
    date: 'التاريخ',
    time: 'الوقت',
    guests: 'عدد الضيوف',
    message: 'ملاحظات (اختياري)',
    reserveTable: 'احجز طاولتك',
    confirmationNote: 'سنقوم بتأكيد الحجز خلال وقت قصير.',

    // Location
    address: 'العنوان',
    contactPhone: 'الهاتف',
    email: 'البريد الإلكتروني',
    getDirections: 'الاتجاهات',

    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    faq1Q: 'هل يجب الحجز قبل الزيارة؟',
    faq1A: 'الزيارة مفتوحة للجميع، لكننا ننصح بالحجز المسبق لضمان توفر الطاولة، خاصة في الأوقات المزدحمة.',
    faq2Q: 'هل توجد خيارات نباتية؟',
    faq2A: 'نعم، لدينا مجموعة متنوعة من الأطباق النباتية المحضّرة من مكونات موسمية طازجة.',
    faq3Q: 'هل المكان مناسب للعائلة؟',
    faq3A: 'بالتأكيد! نرحب بالعائلات ولدينا خيارات مناسبة للأطفال.',
    faq4Q: 'هل توفرون طلبات خارجية؟',
    faq4A: 'نعم، جميع أطباقنا متاحة للطلبات الخارجية مع تغليف أنيق.',
    faq5Q: 'هل يمكن حجز المكان للمناسبات الخاصة؟',
    faq5A: 'نعم، نوفر خدمة العشاء الخاص للمناسبات. يرجى التواصل معنا لمزيد من التفاصيل.',

    // Final CTA
    finalCtaTitle: 'جاهز لعشائك المفضل القادم؟',
    finalCtaSubtitle: 'احجز طاولتك اليوم واستمتع بتجربة دافئة من أول لقمة.',

    // Footer
    footerDescription: 'ميزون داين تجربة مطعم عصرية تجمع بين الأطباق الموسمية، الضيافة الدافئة، والتفاصيل الأنيقة.',
    followUs: 'تابعنا',
    newsletter: 'النشرة البريدية',
    newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',

    // Auth
    welcomeBack: 'مرحبًا بعودتك',
    signInSubtitle: 'سجّل دخولك لإدارة حجوزاتك وتفضيلاتك.',
    createAccount: 'أنشئ حسابك',
    signUpSubtitle: 'احفظ بياناتك، أدر حجوزاتك، واستمتع بتجربة أسهل.',
    emailAddress: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    noAccount: 'ليس لديك حساب؟',
    haveAccount: 'لديك حساب بالفعل؟',
    signInWithGoogle: 'تسجيل الدخول بواسطة Google',
    signUpWithGoogle: 'إنشاء حساب بواسطة Google',
    trustNote: 'بدون إزعاج. فقط تحديثات الحجوزات والعروض المهمة.',
    fullName: 'الاسم الكامل',
    phoneNumber: 'رقم الهاتف',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  };

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
