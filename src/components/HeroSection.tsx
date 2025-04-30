import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Найдем <span className="text-primary">лучших специалистов</span> для вашего бизнеса
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              Команда опытных рекрутеров с 15-летним стажем. Мы подбираем специалистов, которые идеально впишутся в вашу компанию.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Icon name="FileSearch" />
                Подобрать персонал
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Info" />
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
              alt="Команда профессионалов" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
