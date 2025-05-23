import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RegistrationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSwitchToLogin: () => void;
}

const RegistrationModal = ({
  isOpen,
  onOpenChange,
  onSubmit,
  onSwitchToLogin,
}: RegistrationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Email</label>
            <input type="email" className="custom-input" required />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Имя пользователя
            </label>
            <input type="text" className="custom-input" required />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Пароль</label>
            <input type="password" className="custom-input" required />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Подтверждение пароля
            </label>
            <input type="password" className="custom-input" required />
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
              onClick={onSwitchToLogin}
              className="text-primary"
            >
              Войти
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
