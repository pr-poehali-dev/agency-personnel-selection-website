import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'UserSearch',
      title: 'Подбор линейного персонала',
      description: 'Поиск и подбор квалифицированных сотрудников на линейные позиции в кратчайшие сроки.'
    },
    {
      icon: 'Users',
      title: 'Подбор руководителей',
      description: 'Находим талантливых руководителей среднего и высшего звена с проверенным опытом управления.'
    },
    {
      icon: 'GraduationCap',
      title: 'Подбор редких специалистов',
      description: 'Поиск узкопрофильных специалистов с редкими навыками и компетенциями.'
    },
    {
      icon: 'FileSearch',
      title: 'Проверка кандидатов',
      description: 'Тщательная проверка кандидатов, включая рекомендации, психологическое тестирование.'
    },
    {
      icon: 'BarChart',
      title: 'Аналитика рынка труда',
      description: 'Предоставляем актуальную информацию о трендах и зарплатах в вашей отрасли.'
    },
    {
      icon: 'HeartHandshake',
      title: 'Консультации по HR',
      description: 'Профессиональные консультации по вопросам управления персоналом и HR-стратегии.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Предлагаем комплексные решения для эффективного подбора персонала и развития кадрового потенциала вашей компании.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 text-primary">
                  <Icon name={service.icon} size={32} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
