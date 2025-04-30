import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Елена Смирнова',
      position: 'Руководитель агентства',
      experience: '15+ лет в сфере HR и рекрутинга',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Александр Петров',
      position: 'Ведущий рекрутер',
      experience: 'Специалист по IT и техническим кадрам',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Мария Иванова',
      position: 'HR-консультант',
      experience: 'Эксперт по оценке и развитию персонала',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наша команда экспертов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессионалы с многолетним опытом в рекрутинге и глубоким пониманием различных отраслей бизнеса.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary">{member.position}</p>
              <p className="text-gray-600 mt-2">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
