import { motion } from 'motion/react';
import { BookOpen, Heart, Palette, Users, Gift, Cake, PawPrint, Zap, Pizza, PartyPopper } from 'lucide-react';

const lessons = [
  {
    block: 'Блок 1: Давайте познакомимся!',
    blockNumber: 1,
    color: 'lime',
    lessons: [
      { number: 1, title: 'Знакомство с английским', icon: BookOpen },
      { number: 2, title: 'Мое настроение и как мои дела', icon: Heart },
      { number: 3, title: 'Мои школьные принадлежности', icon: BookOpen },
    ],
  },
  {
    block: 'Блок 2: Я и мой мир',
    blockNumber: 2,
    color: 'cyan',
    lessons: [
      { number: 4, title: 'Мои любимые цвета', icon: Palette },
      { number: 5, title: 'Моя семья', icon: Users },
      { number: 6, title: 'С днем рождения! Счет 1-10', icon: Gift },
    ],
  },
  {
    block: 'Блок 3: Я люблю играть',
    blockNumber: 3,
    color: 'orange',
    lessons: [
      { number: 7, title: 'Мои любимые животные', icon: PawPrint },
      { number: 8, title: 'Я могу! Глаголы действия', icon: Zap },
      { number: 9, title: 'Моя еда', icon: Pizza },
      { number: 10, title: 'Повторение и праздничный урок', icon: PartyPopper },
    ],
  },
];

const colorClasses = {
  lime: {
    bg: 'from-lime-500 to-green-500',
    border: 'border-lime-200',
    text: 'text-lime-600',
    bgLight: 'bg-lime-50',
    shadow: 'shadow-lime-200/50',
  },
  cyan: {
    bg: 'from-cyan-500 to-sky-500',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    bgLight: 'bg-cyan-50',
    shadow: 'shadow-cyan-200/50',
  },
  orange: {
    bg: 'from-orange-500 to-amber-500',
    border: 'border-orange-200',
    text: 'text-orange-600',
    bgLight: 'bg-orange-50',
    shadow: 'shadow-orange-200/50',
  },
};

export function Program() {
  return (
    <section id="program" className="py-20 bg-gradient-to-br from-sky-50 via-white to-lime-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-lime-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-lime-100 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-cyan-600" />
            <span className="text-sm font-medium text-gray-700">Программа</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Программа курса
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {lessons.map((block, blockIndex) => (
            <motion.div
              key={block.blockNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: blockIndex * 0.1 }}
            >
              {/* Заголовок блока */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${colorClasses[block.color as keyof typeof colorClasses].bg} rounded-2xl shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {block.block}
                  </span>
                </div>
              </div>

              {/* Уроки блока */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.lessons.map((lesson, lessonIndex) => {
                  const Icon = lesson.icon;
                  const colors = colorClasses[block.color as keyof typeof colorClasses];
                  
                  return (
                    <motion.div
                      key={lesson.number}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: lessonIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`${colors.bgLight} rounded-2xl p-6 border-2 ${colors.border} shadow-lg ${colors.shadow} hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-bold ${colors.text} mb-1`}>
                            Занятие {lesson.number}
                          </div>
                          <div className="text-gray-800 font-semibold leading-snug">
                            {lesson.title}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
