
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articleData, videoData } from '../utils/data';
import { useIntersectionObserver } from '../utils/animations';
import VideoCard from '../components/VideoCard';
import ArticleCard from '../components/ArticleCard';

const Index = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  // Only take the first 3 items for each section
  const visibleVideos = videoData.slice(0, 3);
  const visibleArticles = articleData.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className="relative min-h-[70vh] flex items-center pt-16"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand to-cream/0 pointer-events-none"></div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>              
              <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 tracking-tight text-forest">
                Hi, I'm Dana.
              </h1>
              
              <p className="text-xl md:text-2xl text-olive mb-8">
                Subtitle
              </p>
              
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brown text-cream hover:bg-brown/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Videos Section */}
      <section className="py-20">
        <div className="container">          
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-forest">Videos</h3>
              <Link to="/videos" className="text-brown hover:underline flex items-center">
                View all videos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          </div>
          
          {/* Articles Section */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-forest">Articles</h3>
              <Link to="/articles" className="text-brown hover:underline flex items-center">
                View all articles <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-sand">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-forest">Let's Work Together</h2>
            <p className="text-olive mb-8">
              Interested in collaborating on a project? I'm always open to discussing new opportunities and ideas.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brown text-cream hover:bg-brown/90 transition-colors"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
