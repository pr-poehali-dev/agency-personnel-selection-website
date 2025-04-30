import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        
        {/* Секция команды */}
        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Наша команда экспертов</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Профессионалы с многолетним опытом в рекрутинге и глубоким пониманием различных отраслей бизнеса.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Карточки членов команды */}
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Елена Смирнова" 
                  className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Елена Смирнова</h3>
                <p className="text-primary">Руководитель агентства</p>
                <p className="text-gray-600 mt-2">15+ лет в сфере HR и рекрутинга</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Александр Петров" 
                  className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Александр Петров</h3>
                <p className="text-primary">Ведущий рекрутер</p>
                <p className="text-gray-600 mt-2">Специалист по IT и техническим кадрам</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Мария Иванова" 
                  className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Мария Иванова</h3>
                <p className="text-primary">HR-консультант</p>
                <p className="text-gray-600 mt-2">Эксперт по оценке и развитию персонала</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Футер с контактами */}
        <section id="contact" className="py-20 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Готовы обсудить ваши кадровые потребности и предложить оптимальное решение для вашего бизнеса.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-primary text-white">
                  <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <span className="mr-3">📍</span>
                      <span>г. Москва, ул. Профессиональная, 123</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">📞</span>
                      <span>+7 (999) 123-45-67</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">✉️</span>
                      <span>info@profikadr.ru</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">🕙</span>
                      <span>Пн-Пт: 9:00 - 18:00</span>
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Оставьте заявку</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Сообщение</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32" 
                      ></textarea>
                    </div>
                    <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors">
                      Отправить заявку
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 ПрофиКадр. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
