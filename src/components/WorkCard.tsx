import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface WorkCardProps {
  image: string;
  title: string;
  author: string;
  likes: number;
  views: number;
  category: string;
}

const WorkCard = ({
  image,
  title,
  author,
  likes,
  views,
  category,
}: WorkCardProps) => {
  return (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:scale-105 group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-white font-semibold mb-1 truncate">{title}</h3>
        <p className="text-slate-400 text-sm mb-3">от {author}</p>

        <div className="flex items-center justify-between text-slate-400 text-sm">
          <div className="flex items-center space-x-1">
            <Icon name="Heart" size={14} />
            <span>{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Eye" size={14} />
            <span>{views}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
