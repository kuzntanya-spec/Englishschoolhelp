import { motion } from 'motion/react';
import { TrendingUp, MessageCircle, Hand, Music, Award } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Принцип «На шаг впереди»',
    description: 'Опережаем школьную программу на полшага, чтобы в классе ребенок чувствовал себя уверенно',
    color: 'lime',
  },
  {
    icon: MessageCircle,
    title: 'Минимум письма, максимум речи',
    description: 'Фокусируемся на разговорной практике и понимании языка',
    color: 'cyan',
  },
  {
    icon: Hand,
    title: 'Используем TPR (Total Physical Response)',
    description: 'Учим язык через движение и действия — это весело и эффективно',
    color: 'orange',
  },
  {
    icon: Music,
    title: 'Песни и видео',
    description: 'Запоминаем слова и структуры через музыку и визуальный контент',
    color: 'lime',
  },
  {
    icon: Award,
    title: 'Похвала',
    description: 'Хвалим за каждую попытку заговорить — создаем атмосферу успеха',
    color: 'cyan',
  },
];

const colorClasses = {
  lime: {
    bg: 'from-lime-500 to-green-500',
    glow: 'shadow-lime-400/50',
    icon: 'bg-lime-100',
    iconColor: 'text-lime-600',
  },
  cyan: {
    bg: 'from-cyan-500 to-sky-500',
    glow: 'shadow-cyan-400/50',
    icon: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
  orange: {
    bg: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-400/50',
    icon: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
};

export function WhySpecial() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-lime-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-100 to-orange-100 rounded-full mb-4">
            <Award className="w-5 h-5 text-lime-600" />
            <span className="text-sm font-medium text-gray-700">Преимущества</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Почему этот курс <span className="text-transparent bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text">особенный?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Неоновый эффект при наведении */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Иконка */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-2xl mb-6 shadow-md ${colors.glow} group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                    </motion.div>
                  </div>

                  {/* Контент */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 relative">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Дополнительный блок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-lime-50 via-cyan-50 to-orange-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-lime-100">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              <span className="font-bold text-lime-600">Эта программа создаст у ребенка ощущение успеха</span> на основных школьных уроках, что является главной мотивацией для изучения языка в дальнейшем.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
