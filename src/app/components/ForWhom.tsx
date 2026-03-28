import { motion } from 'motion/react';
import { Users, Target } from 'lucide-react';

export function ForWhom() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-lime-100 rounded-full mb-4">
            <Users className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Для кого курс</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Первая группа: <span className="text-lime-600">2 класс</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-lime-50 via-cyan-50 to-orange-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-lime-100/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Цель курса:
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Создать прочную базу разговорной речи и понимания структур, которые проходят во 2 классе (по учебникам Spotlight, Starlight и др.), через песни, игры и творческие задания.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100 shadow-md">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-lime-600">Главная задача:</span> не напугать сложностью, а привить любовь к языку и помочь ребенку чувствовать себя уверенно на основных школьных уроках.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Программа построена так, чтобы <span className="font-semibold text-cyan-600">опережать школьную программу на полшага:</span> мы берем лексику и грамматику, которые вот-вот начнутся в школе, и отрабатываем их в игре, чтобы в классе ребенок уже все знал.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
