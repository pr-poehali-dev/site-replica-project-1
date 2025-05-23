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
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-cyan-400">KRX Community</h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Работы
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Гайды
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Курсы
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Вакансии
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Сообщество
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={16}
            />
            <Input
              placeholder="Поиск"
              className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
            />
          </div>

          <Dialog
            open={isRegistrationOpen}
            onOpenChange={setIsRegistrationOpen}
          >
            <DialogTrigger asChild>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Регистрация
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-600 text-white">
              <DialogHeader>
                <DialogTitle className="text-white">Регистрация</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Email
                  </label>
                  <Input className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Имя пользователя
                  </label>
                  <Input className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Пароль
                  </label>
                  <Input
                    type="password"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Подтверждение пароля
                  </label>
                  <Input
                    type="password"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-slate-300">
                    Я согласен с{" "}
                    <span className="text-cyan-400">
                      условиями использования
                    </span>{" "}
                    и{" "}
                    <span className="text-cyan-400">
                      политикой конфиденциальности
                    </span>
                  </label>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Зарегистрироваться
                </Button>
                <p className="text-center text-sm text-slate-400">
                  Уже есть аккаунт?{" "}
                  <span className="text-cyan-400 cursor-pointer">Войти</span>
                </p>
              </form>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Профиль
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
