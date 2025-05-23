import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Sidebar = () => {
  const categories = [
    "3D моделирование",
    "Анимация",
    "Текстурирование",
    "Визуализация",
    "Концепт-арт",
    "Все категории",
  ];

  const programs = [
    { name: "Blender", checked: true },
    { name: "3ds Max", checked: false },
    { name: "Maya", checked: false },
    { name: "ZBrush", checked: false },
    { name: "Cinema 4D", checked: false },
  ];

  const styles = [
    "Реализм",
    "Стилизованный",
    "Низкополигональный",
    "Мультяшный",
  ];

  return (
    <aside className="w-80 bg-slate-900 border-r border-slate-700 p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Категории</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                index === 0
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Card className="bg-slate-800 border-slate-700 p-4">
        <h4 className="text-white font-semibold mb-3">Фильтры</h4>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-300 mb-2 block">
              Сортировка
            </label>
            <Select>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Популярные" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="popular">Популярные</SelectItem>
                <SelectItem value="newest">Новые</SelectItem>
                <SelectItem value="oldest">Старые</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h5 className="text-slate-300 text-sm mb-3">Программы</h5>
            <div className="space-y-2">
              {programs.map((program, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={program.name}
                    defaultChecked={program.checked}
                  />
                  <label
                    htmlFor={program.name}
                    className="text-sm text-slate-300"
                  >
                    {program.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-slate-300 text-sm mb-3">Стиль</h5>
            <div className="space-y-2">
              {styles.map((style, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={style} />
                  <label htmlFor={style} className="text-sm text-slate-300">
                    {style}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
