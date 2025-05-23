const Navigation = () => {
  const navItems = [
    { label: "Главная", href: "#", active: true },
    { label: "Работы", href: "#" },
    { label: "Гайды", href: "#" },
    { label: "Курсы", href: "#" },
    { label: "Вакансии", href: "#" },
    { label: "Сообщество", href: "#" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`transition-colors duration-200 ${
            item.active
              ? "text-white hover:text-primary font-medium"
              : "text-gray-400 hover:text-primary"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
