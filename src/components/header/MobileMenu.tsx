interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navItems = [
    { label: "Главная", href: "#", active: true },
    { label: "Работы", href: "#" },
    { label: "Гайды", href: "#" },
    { label: "Курсы", href: "#" },
    { label: "Вакансии", href: "#" },
    { label: "Сообщество", href: "#" },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 bg-background transform transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-white"
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`py-2 border-b border-gray-800 ${
              item.active ? "text-white font-medium" : "text-gray-400"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
