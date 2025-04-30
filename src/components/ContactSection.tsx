import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const ContactSection: React.FC = () => {
  return (
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
                  <Icon name="MapPin" className="mr-3" />
                  <span>г. Москва, ул. Профессиональная, 123</span>
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" className="mr-3" />
                  <span>+7 (999) 123-45-67</span>
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="mr-3" />
                  <span>info@profikadr.ru</span>
                </p>
                <p className="flex items-center">
                  <Icon name="Clock" className="mr-3" />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </p>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input type="email" placeholder="Введите ваш email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем запросе" className="h-32" />
                </div>
                <Button className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
