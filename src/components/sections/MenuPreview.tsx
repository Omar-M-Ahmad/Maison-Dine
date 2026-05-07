import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import * as Tabs from '@radix-ui/react-tabs';
import { cn } from '../../lib/utils';

export const MenuPreview: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('starters');

  const menuItems = {
    starters: [
      { name: 'Burrata Salad', description: 'Fresh burrata with heirloom tomatoes', price: '$16' },
      { name: 'Soup of the Day', description: 'Chef\'s seasonal selection', price: '$12', popular: true },
      { name: 'Calamari', description: 'Crispy squid with aioli', price: '$18' },
    ],
    mainCourses: [
      { name: 'Risotto Primavera', description: 'Seasonal vegetables and parmesan', price: '$28' },
      { name: 'Lamb Rack', description: 'Herb-crusted with rosemary jus', price: '$42', popular: true },
      { name: 'Sea Bass', description: 'Pan-seared with lemon butter', price: '$36' },
    ],
    desserts: [
      { name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: '$12', popular: true },
      { name: 'Chocolate Fondant', description: 'Warm chocolate with vanilla ice cream', price: '$14' },
      { name: 'Seasonal Fruit Tart', description: 'Fresh fruits with pastry cream', price: '$11' },
    ],
    drinks: [
      { name: 'Espresso', description: 'Single or double shot', price: '$4' },
      { name: 'House Wine', description: 'Red or white selection', price: '$8', popular: true },
      { name: 'Fresh Juice', description: 'Orange, apple, or mixed berries', price: '$6' },
    ],
  };

  const tabs = [
    { id: 'starters', label: t('starters') },
    { id: 'mainCourses', label: t('mainCourses') },
    { id: 'desserts', label: t('desserts') },
    { id: 'drinks', label: t('drinks') },
  ];

  return (
    <section id="menu" className="py-16 lg:py-24 bg-soft-card/30">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('menu')}
          </h2>
        </div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List className="flex flex-wrap gap-3 justify-center mb-12">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                )}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Object.entries(menuItems).map(([category, items]) => (
            <Tabs.Content key={category} value={category}>
              <div className="max-w-3xl mx-auto space-y-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        {item.popular && (
                          <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                            {t('popular')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-lg font-bold text-primary shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t('viewFullMenu')}
          </Button>
        </div>
      </div>
    </section>
  );
};
