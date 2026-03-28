import { motion } from 'motion/react';
import { Rocket, Users, Clock, ArrowRight } from 'lucide-react';

export function Enroll() {
  return (
    <section id="enroll" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Декоративные элементы с неоновым свечением */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Заголовок */}
          <div className="mb-8">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-500/20 to-cyan-500/20 border border-lime-400/30 rounded-full mb-6"
            >
              <Rocket className="w-5 h-5 text-lime-400" />
              <span className="text-sm font-medium text-lime-300">Набор открыт!</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Начните путешествие в мир <br />
              <span className="text-transparent bg-gradient-to-r from-lime-400 via-cyan-400 to-orange-400 bg-clip-text">
                английского языка
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>

          {/* Ключевые моменты */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Users className="w-10 h-10 text-lime-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">до 6 детей</div>
              <div className="text-sm text-gray-400">в группе</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Clock className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">10 уроков</div>
              <div className="text-sm text-gray-400">полная программа</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Rocket className="w-10 h-10 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Места ограничены</div>
              <div className="text-sm text-gray-400">успейте записаться</div>
            </div>
          </motion.div>

          {/* Большая кнопка записи */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-lime-500 via-cyan-500 to-orange-500 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-lime-500/50 transition-all duration-300"
            >
              {/* Анимированный фон */}
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(to right, rgb(132, 204, 22), rgb(6, 182, 212), rgb(249, 115, 22))',
                    'linear-gradient(to right, rgb(249, 115, 22), rgb(132, 204, 22), rgb(6, 182, 212))',
                    'linear-gradient(to right, rgb(6, 182, 212), rgb(249, 115, 22), rgb(132, 204, 22))',
                    'linear-gradient(to right, rgb(132, 204, 22), rgb(6, 182, 212), rgb(249, 115, 22))',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <span className="relative z-10">Записаться на курс</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Неоновое свечение */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-500 via-cyan-500 to-orange-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </motion.button>

            <p className="mt-6 text-sm text-gray-400">
              Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
            </p>
          </motion.div>

          {/* Дополнительная мотивация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-orange-500/10 border border-lime-400/20 rounded-3xl backdrop-blur-sm"
          >
            <p className="text-lg text-gray-200 leading-relaxed">
              <span className="font-bold text-lime-400">Группы маленькие</span> — максимум 6 детей, чтобы каждый получил внимание. 
              <span className="font-bold text-cyan-400"> Места ограничены!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
