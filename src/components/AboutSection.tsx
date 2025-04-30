import React from 'react';
import Icon from '@/components/ui/icon';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: 'Clock',
      title: '15+ лет опыта',
      description: 'Команда опытных специалистов с многолетним стажем в сфере рекрутинга'
    },
    {
      icon: 'CheckCircle',
      title: '98% успешных подборов',
      description: 'Высокий процент успешных подборов, прошедших испытательный срок'
    },
    {
      icon: 'Briefcase',
      title: '1000+ закрытых вакансий',
      description: 'Большой опыт в подборе специалистов разных направлений и уровней'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">О нашем агентстве</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы — команда профессионалов, специализирующихся на поиске и подборе квалифицированных кадров для компаний различных отраслей.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-accent rounded-lg p-8 transition-transform hover:translate-y-[-5px]">
              <div className="inline-flex items-center justify-center bg-primary rounded-full w-14 h-14 mb-6">
                <Icon name={feature.icon} size={24} color="white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
