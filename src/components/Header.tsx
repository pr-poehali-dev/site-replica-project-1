import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistrationOpen(false);
    alert("Регистрация успешна!");
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginOpen(false);
    alert("Вход выполнен успешно!");
  };

  const switchToLogin = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(true);
  };

  const switchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegistrationOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-2xl font-pacifico gradient-text">
                KRX Community
              </a>
              <nav className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-200 font-medium"
                >
                  Главная
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Работы
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Гайды
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Курсы
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Вакансии
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Сообщество
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="custom-input pr-10 w-40 md:w-60 text-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                  <i className="ri-search-line"></i>
                </div>
              </div>

              <Dialog
                open={isRegistrationOpen}
                onOpenChange={setIsRegistrationOpen}
              >
                <DialogTrigger asChild>
                  <button className="custom-button !rounded-button whitespace-nowrap text-sm">
                    Регистрация
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-surface border-gray-600 text-white max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-bold mb-6">
                      Регистрация
                    </DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={handleRegistrationSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Email
                      </label>
                      <input type="email" className="custom-input" required />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Имя пользователя
                      </label>
                      <input type="text" className="custom-input" required />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Пароль
                      </label>
                      <input
                        type="password"
                        className="custom-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Подтверждение пароля
                      </label>
                      <input
                        type="password"
                        className="custom-input"
                        required
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" required />
                      <label htmlFor="terms" className="text-sm text-gray-400">
                        Я согласен с{" "}
                        <a href="#" className="text-primary">
                          условиями использования
                        </a>{" "}
                        и{" "}
                        <a href="#" className="text-primary">
                          политикой конфиденциальности
                        </a>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="custom-button !rounded-button w-full"
                    >
                      Зарегистрироваться
                    </button>
                    <p className="text-center text-sm text-gray-400">
                      Уже есть аккаунт?{" "}
                      <button
                        type="button"
                        onClick={switchToLogin}
                        className="text-primary"
                      >
                        Войти
                      </button>
                    </p>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <button className="gradient-border !rounded-button bg-surface px-4 py-2 text-sm font-medium whitespace-nowrap">
                    Профиль
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-surface border-gray-600 text-white max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-white text-2xl font-bold mb-6">
                      Вход в аккаунт
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Email или имя пользователя
                      </label>
                      <input type="text" className="custom-input" required />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Пароль
                      </label>
                      <input
                        type="password"
                        className="custom-input"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm text-gray-400">
                        <input type="checkbox" />
                        <span>Запомнить меня</span>
                      </label>
                      <a href="#" className="text-sm text-primary">
                        Забыли пароль?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="custom-button !rounded-button w-full"
                    >
                      Войти
                    </button>
                    <p className="text-center text-sm text-gray-400">
                      Нет аккаунта?{" "}
                      <button
                        type="button"
                        onClick={switchToRegister}
                        className="text-primary"
                      >
                        Зарегистрироваться
                      </button>
                    </p>
                    <div className="relative flex items-center justify-center">
                      <div className="border-t border-gray-700 w-full absolute"></div>
                      <span className="bg-surface px-4 relative z-10 text-sm text-gray-400">
                        или войти через
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="flex items-center justify-center space-x-2 bg-surface-secondary border border-gray-700 py-2 rounded-lg text-sm"
                      >
                        <i className="ri-google-fill text-lg"></i>
                        <span>Google</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center space-x-2 bg-surface-secondary border border-gray-700 py-2 rounded-lg text-sm"
                      >
                        <i className="ri-vk-fill text-lg"></i>
                        <span>ВКонтакте</span>
                      </button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              >
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <div
        className={`fixed inset-0 z-40 bg-background transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          <a
            href="#"
            className="text-white font-medium py-2 border-b border-gray-800"
          >
            Главная
          </a>
          <a href="#" className="text-gray-400 py-2 border-b border-gray-800">
            Работы
          </a>
          <a href="#" className="text-gray-400 py-2 border-b border-gray-800">
            Гайды
          </a>
          <a href="#" className="text-gray-400 py-2 border-b border-gray-800">
            Курсы
          </a>
          <a href="#" className="text-gray-400 py-2 border-b border-gray-800">
            Вакансии
          </a>
          <a href="#" className="text-gray-400 py-2 border-b border-gray-800">
            Сообщество
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
