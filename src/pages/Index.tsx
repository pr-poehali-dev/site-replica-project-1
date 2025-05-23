import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import WorkCard from "@/components/WorkCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const popularWorks = [
    {
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      title: "Cyberpunk Character",
      author: "Alex_3D",
      likes: 142,
      views: 2845,
      category: "3D модель",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=400&h=300&fit=crop",
      title: "Sci-Fi Environment",
      author: "MariaDesign",
      likes: 98,
      views: 1567,
      category: "Окружение",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      title: "Retro Robot",
      author: "TechMaster",
      likes: 205,
      views: 3421,
      category: "Персонаж",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop",
      title: "Fantasy Sword",
      author: "WeaponCraft",
      likes: 67,
      views: 892,
      category: "Предмет",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=400&h=300&fit=crop",
      title: "Alien Landscape",
      author: "SpaceArt",
      likes: 156,
      views: 2134,
      category: "Ландшафт",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      title: "Mech Warrior",
      author: "RoboDesign",
      likes: 189,
      views: 2967,
      category: "Мех",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-8 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-white mb-4">
                Добро пожаловать в KRX Community
              </h1>
              <p className="text-xl text-slate-300 mb-6 max-w-2xl">
                Сообщество 3D художников, где вы можете делиться работами,
                изучать гайды и находить вдохновение для моделирования
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3">
                Начать публиковать
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/20 to-transparent" />
          </div>

          {/* Popular Works Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Популярные работы
              </h2>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Все
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  3D модели
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Рендеры
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularWorks.map((work, index) => (
                <WorkCard key={index} {...work} />
              ))}
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1,234</div>
              <div className="text-slate-300">Активных художников</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                5,678
              </div>
              <div className="text-slate-300">Опубликованных работ</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">92</div>
              <div className="text-slate-300">Обучающих гайда</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
