import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "Briefcase",
      title: "Подбор линейного персонала",
      description: "Быстрый подбор специалистов среднего звена для различных отделов вашей компании."
    },
    {
      icon: "Users",
      title: "Рекрутинг руководителей",
      description: "Поиск топ-менеджеров и директоров с опытом управления и необходимыми компетенциями."
    },
    {
      icon: "Search",
      title: "Хедхантинг",
      description: "Целенаправленный поиск и привлечение конкретных специалистов из компаний-конкурентов."
    },
    {
      icon: "ClipboardCheck",
      title: "Массовый подбор",
      description: "Комплектация штата при открытии филиалов или запуске новых проектов."
    },
    {
      icon: "UserCheck",
      title: "Оценка персонала",
      description: "Профессиональная оценка компетенций кандидатов и действующих сотрудников."
    },
    {
      icon: "Lightbulb",
      title: "HR-консалтинг",
      description: "Консультации по вопросам найма, мотивации и удержания персонала."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по подбору персонала и HR-консалтингу для компаний любого масштаба и сферы деятельности.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="mr-3 text-primary">
                    <Icon name={service.icon} size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
