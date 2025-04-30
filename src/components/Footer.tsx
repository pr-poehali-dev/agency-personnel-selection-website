import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ПрофиКадр</h3>
            <p className="text-gray-400">
              Профессиональное агентство по подбору персонала с 15-летним опытом на рынке.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Команда</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Подбор персонала</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">HR-консультации</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Аналитика рынка</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center text-gray-400">
                <Icon name="Mail" size={16} className="mr-2" />
                info@profikadr.ru
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 ПрофиКадр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
