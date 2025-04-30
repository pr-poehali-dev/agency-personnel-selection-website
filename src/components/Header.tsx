import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl mr-2">
              <span className="text-primary">Профи</span>
              <span className="text-gray-800">Кадр</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Команда</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="hidden md:block">
            <Button>
              <Icon name="Phone" className="mr-2" size={16} />
              Связаться с нами
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
