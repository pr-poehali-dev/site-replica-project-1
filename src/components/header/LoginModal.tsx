import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSwitchToRegister: () => void;
}

const LoginModal = ({
  isOpen,
  onOpenChange,
  onSubmit,
  onSwitchToRegister,
}: LoginModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Email или имя пользователя
            </label>
            <input type="text" className="custom-input" required />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Пароль</label>
            <input type="password" className="custom-input" required />
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
              onClick={onSwitchToRegister}
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
  );
};

export default LoginModal;
