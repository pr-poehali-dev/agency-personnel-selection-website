import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      detail: "г. Москва, ул. Профессиональная, 15, офис 301"
    },
    {
      icon: "Phone",
      title: "Телефон",
      detail: "+7 (495) 123-45-67"
    },
    {
      icon: "Mail",
      title: "Email",
      detail: "info@profikader.ru"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время для обсуждения ваших потребностей в подборе персонала.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4 flex-shrink-0">
                  <Icon name={item.icon} className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <form>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Input placeholder="Тема" />
                  </div>
                  <div className="mb-4">
                    <Textarea 
                      placeholder="Опишите ваши потребности в подборе персонала" 
                      rows={4}
                    />
                  </div>
                  <Button className="w-full md:w-auto">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
