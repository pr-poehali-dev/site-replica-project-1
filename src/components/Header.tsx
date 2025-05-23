import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/header/Logo";
import Navigation from "@/components/header/Navigation";
import SearchBar from "@/components/header/SearchBar";
import RegistrationModal from "@/components/header/RegistrationModal";
import LoginModal from "@/components/header/LoginModal";
import MobileMenu from "@/components/header/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    isRegistrationOpen,
    setIsRegistrationOpen,
    isLoginOpen,
    setIsLoginOpen,
    handleRegistrationSubmit,
    handleLoginSubmit,
    switchToLogin,
    switchToRegister,
  } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Logo />
              <Navigation />
            </div>

            <div className="flex items-center space-x-4">
              <SearchBar />

              <RegistrationModal
                isOpen={isRegistrationOpen}
                onOpenChange={setIsRegistrationOpen}
                onSubmit={handleRegistrationSubmit}
                onSwitchToLogin={switchToLogin}
              />

              <LoginModal
                isOpen={isLoginOpen}
                onOpenChange={setIsLoginOpen}
                onSubmit={handleLoginSubmit}
                onSwitchToRegister={switchToRegister}
              />

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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
