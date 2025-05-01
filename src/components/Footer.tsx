import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Профи</span>
              <span className="text-white">Кадр</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональное агентство по подбору персонала с 15-летним опытом работы на рынке.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Подбор персонала</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Хедхантинг</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Массовый подбор</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">HR-консалтинг</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Команда</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="MapPin" size={16} className="text-primary mr-2" />
                <span className="text-gray-400">г. Москва, ул. Профессиональная, 15</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="text-primary mr-2" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="text-primary mr-2" />
                <span className="text-gray-400">info@profikader.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ПрофиКадр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
