import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Независимый музыкант, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Заказал тираж кассет для своего альбома — получилось невероятно. Качество записи и печать просто на высшем уровне. Все фанаты в восторге!",
  },
  {
    name: "Дарья Соколова",
    role: "Организатор арт-маркета",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Сделали кастомные виниловые пластинки как подарки для участников нашего события. Гости были шокированы — такого они явно не ожидали.",
  },
  {
    name: "Ольга Кириллова",
    role: "Основатель инди-лейбла",
    avatar: "/professional-woman-scientist.png",
    content:
      "Работаем с ними уже третий год. Надёжные сроки, честные цены и отличный результат. Лучший партнёр для малых тиражей на рынке.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят наши клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Музыканты, лейблы и организаторы событий уже оценили качество нашей работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
