
import { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';
import { ArticleItem } from '../utils/data';

interface ArticleCardProps {
  article: ArticleItem;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative overflow-hidden bg-white rounded-lg border border-sand shadow-sm hover:shadow-md transition-all duration-500 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <img 
          src={article.image} 
          alt={article.title}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 blur-[2px]' : 'scale-100'}`}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-forest/30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forest/80 to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h3 className="text-white font-heading leading-tight mb-1">{article.title}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <Eye className="h-3 w-3 mr-1" /> Read article
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-tan text-white">
            {article.category}
          </span>
          <span className="text-xs text-olive">{article.date}</span>
        </div>
        
        <h3 className="text-lg font-heading font-medium leading-tight mb-2 group-hover:text-brown transition-colors">
          {article.title}
        </h3>
        
        <p className="text-olive text-sm line-clamp-2 mb-4">{article.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-olive">{article.readTime}</span>
          <a 
            href={article.url} 
            className="inline-flex items-center text-sm font-medium text-brown"
          >
            Read Article <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
