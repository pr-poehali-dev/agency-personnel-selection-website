import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const AboutSection: React.FC = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "15+ лет опыта",
      description: "Мы работаем на рынке рекрутинга с 2008 года и знаем все тонкости подбора профессионалов."
    },
    {
      icon: "Users",
      title: "3000+ закрытых вакансий",
      description: "За время работы мы успешно закрыли тысячи позиций в различных сферах бизнеса."
    },
    {
      icon: "CheckCircle",
      title: "92% успешных наймов",
      description: "Наши кандидаты проходят испытательный срок и становятся ценными сотрудниками."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">О нашем агентстве</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ПрофиКадр — это команда профессионалов с многолетним опытом в подборе персонала для компаний разных масштабов и отраслей.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <Icon name={benefit.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
