import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <span>Создано с</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>для детей и их будущего</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 Английский для помощи школьной программе
          </div>
        </div>
      </div>
    </footer>
  );
}
