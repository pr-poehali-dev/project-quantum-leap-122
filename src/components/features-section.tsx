import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Виниловые пластинки",
    description: "Кастомные виниловые диски с вашей музыкой или любым аудиоконтентом. Выбирайте цвет, этикетку и оформление конверта.",
    icon: "disc",
    badge: "Винил",
  },
  {
    title: "Компакт-кассеты",
    description: "Кассеты с индивидуальной записью и оформлением. Идеально для ретро-эстетики, мерча и музыкальных подарков.",
    icon: "tape",
    badge: "Кассета",
  },
  {
    title: "Кастомный дизайн",
    description: "Разработаем уникальный дизайн этикетки, обложки и вкладыша под ваш стиль или фирменный стиль бренда.",
    icon: "art",
    badge: "Дизайн",
  },
  {
    title: "Малые тиражи",
    description: "Принимаем заказы от 1 штуки. Небольшие тиражи для артистов, событий, подарков и лимитированных изданий.",
    icon: "small",
    badge: "От 1 шт",
  },
  {
    title: "Высокое качество звука",
    description: "Профессиональная запись с соблюдением стандартов мастеринга для винила и кассет. Чистый аналоговый звук.",
    icon: "audio",
    badge: "Hi-Fi",
  },
  {
    title: "Быстрое производство",
    description: "Чёткие сроки изготовления и бережная доставка по России и СНГ. Ваш заказ придёт в идеальном состоянии.",
    icon: "delivery",
    badge: "Доставка",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что мы делаем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Кастомные аналоговые носители — от одного экземпляра до тиража. Ваш звук в физическом формате.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "disc" && "🎵"}
                    {feature.icon === "tape" && "📼"}
                    {feature.icon === "art" && "🎨"}
                    {feature.icon === "small" && "✨"}
                    {feature.icon === "audio" && "🎚️"}
                    {feature.icon === "delivery" && "📦"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
