import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-border py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Users" size={28} />
            <span>ПрофиКадр</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
          <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
        </nav>
        
        <Button>
          <Icon name="Phone" />
          Связаться
        </Button>
      </div>
    </header>
  );
};

export default Header;
