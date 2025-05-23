import { useState } from "react";

export const useAuth = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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

  return {
    isRegistrationOpen,
    setIsRegistrationOpen,
    isLoginOpen,
    setIsLoginOpen,
    handleRegistrationSubmit,
    handleLoginSubmit,
    switchToLogin,
    switchToRegister,
  };
};
