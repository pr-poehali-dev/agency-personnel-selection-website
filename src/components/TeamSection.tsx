import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Елена Соколова",
      position: "Генеральный директор",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: "20+ лет в HR"
    },
    {
      name: "Максим Петров",
      position: "Руководитель отдела рекрутинга",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: "15+ лет в подборе персонала"
    },
    {
      name: "Анна Иванова",
      position: "Старший HR-консультант",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: "12+ лет в HR-консалтинге"
    }
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Наша команда</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с нашими ведущими специалистами, которые помогут вам найти идеальных сотрудников для вашего бизнеса.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex space-x-3 text-white">
                    <a href="#" className="hover:text-primary transition-colors">
                      <Icon name="Linkedin" size={20} />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                      <Icon name="Mail" size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="pt-5">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <div className="flex items-center text-primary">
                  <Icon name="Star" size={16} className="mr-1" />
                  <span className="text-sm">{member.experience}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
