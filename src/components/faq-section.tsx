import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какой минимальный тираж можно заказать?",
      answer:
        "Мы принимаем заказы от 1 экземпляра. Будь то уникальный подарок или небольшой тираж — мы возьмёмся за любой объём.",
    },
    {
      question: "В каком формате прислать аудиофайлы?",
      answer:
        "Принимаем WAV, FLAC и AIFF с частотой дискретизации 44.1 кГц и выше. Если файлы не оптимизированы под аналоговую запись — бесплатно поможем с мастерингом.",
    },
    {
      question: "Могу ли я выбрать цвет винила или кассеты?",
      answer:
        "Да! Доступны прозрачные, цветные, мраморные и сплэттер-варианты. Точный ассортимент уточняйте при оформлении заказа.",
    },
    {
      question: "Вы делаете дизайн этикетки и обложки?",
      answer:
        "Да, у нас есть дизайнеры, которые создадут оформление с нуля или воплотят ваши идеи. Также принимаем готовые файлы в PDF/AI/PSD.",
    },
    {
      question: "Сколько времени занимает изготовление?",
      answer:
        "Обычно 2–4 недели в зависимости от тиража и сложности дизайна. Точные сроки уточняются после согласования заказа.",
    },
    {
      question: "Доставляете ли вы за пределы России?",
      answer:
        "Да, работаем со всеми странами СНГ. По другим направлениям — уточняйте индивидуально, найдём решение.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать перед заказом кастомного винила или кассеты.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
