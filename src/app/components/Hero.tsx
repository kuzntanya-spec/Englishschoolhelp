import { motion } from 'motion/react';
import { BookOpen, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-lime-50">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-lime-200/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - текст */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-100 to-cyan-100 rounded-full shadow-sm"
            >
              <Sparkles className="w-5 h-5 text-lime-600" />
              <span className="text-sm font-medium text-gray-700">Для 2 класса</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-lime-600 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Английский
              </span>
              <br />
              <span className="text-gray-800">
                для помощи школьной программе
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Не напугать сложностью, а привить любовь к языку. Ребенок будет чувствовать себя уверенно на школьных уроках!
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-lime-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Записаться на курс
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-lime-300"
              >
                Узнать подробнее
              </button>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-600">10</div>
                <div className="text-sm text-gray-600">уроков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">6</div>
                <div className="text-sm text-gray-600">детей в группе</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">результат</div>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка - изображение */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 to-cyan-500/20 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1770096679844-57ca92c2b64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwZW5nbGlzaCUyMGhhcHB5fGVufDF8fHx8MTc3NDUwNzA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Children learning English"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Плавающие карточки */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-lime-200"
            >
              <div className="text-4xl">🎯</div>
              <div className="text-xs font-semibold text-gray-700 mt-1">Игровой формат</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-cyan-200"
            >
              <div className="text-4xl">⭐</div>
              <div className="text-xs font-semibold text-gray-700 mt-1">Без стресса</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
