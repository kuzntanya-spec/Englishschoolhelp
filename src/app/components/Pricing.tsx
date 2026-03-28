import { motion } from 'motion/react';
import { DollarSign, Check, Sparkles } from 'lucide-react';

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-lime-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-lime-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-100 to-cyan-100 rounded-full mb-4">
            <DollarSign className="w-5 h-5 text-lime-600" />
            <span className="text-sm font-medium text-gray-700">Стоимость</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Выберите подходящий формат
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Полный курс */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Бейдж "Популярно" */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-lime-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                <span>Популярно</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-lime-200 h-full">
              {/* Неоновый эффект */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Полный курс
                </h3>
                <p className="text-gray-600 mb-6">
                  Все 10 уроков по выгодной цене
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-lime-600">12 000</span>
                    <span className="text-xl text-gray-600">руб</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    1 200 руб / урок
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-lime-600" />
                    </div>
                    <span className="text-gray-700">10 занятий полной программы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-lime-600" />
                    </div>
                    <span className="text-gray-700">Экономия 1 000 рублей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-lime-600" />
                    </div>
                    <span className="text-gray-700">Все материалы курса</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-lime-600" />
                    </div>
                    <span className="text-gray-700">Поддержка преподавателя</span>
                  </li>
                </ul>

                <button
                  onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-6 py-4 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Записаться
                </button>
              </div>
            </div>
          </motion.div>

          {/* Абонемент */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-cyan-200 h-full">
              {/* Неоновый эффект */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Абонемент
                </h3>
                <p className="text-gray-600 mb-6">
                  Пробный вариант для новичков
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-cyan-600">1 300</span>
                    <span className="text-xl text-gray-600">руб</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    за урок
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Оплата поурочно</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Гибкий график</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Все материалы урока</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Без долгосрочных обязательств</span>
                  </li>
                </ul>

                <button
                  onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Записаться
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
