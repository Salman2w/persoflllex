import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2, Linkedin, Facebook, Twitter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from './Blog';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "PersoFlex GmbH"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.persoflex-gmbh.de/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.persoflex-gmbh.de/blog/${post.id}`
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-hell-void">
      <SEO 
        title={`${post.title} | PersoFlex GmbH Blog`}
        description={post.excerpt}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-hell-ember/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hell-flame/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hell-ember/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            {/* Breadcrumb */}
            <NavLink 
              to="/blog" 
              className="inline-flex items-center gap-2 text-hell-ash hover:text-hell-flame transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Zuruck zum Blog
            </NavLink>

            {/* Category */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-hell-flame/20 text-hell-flame text-xs font-bold rounded-sm border border-hell-flame/30 mb-6">
              <Tag size={12} />
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-hell-ash">
              <span className="flex items-center gap-2">
                <User size={16} className="text-hell-flame" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-hell-flame" />
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-hell-flame" />
                {post.readTime} Lesezeit
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="bg-hell-charcoal/50 backdrop-blur-sm border border-hell-smoke/20 rounded-sm p-8 md:p-12"
          >
            {/* Lead Text */}
            <p className="text-xl text-hell-ash leading-relaxed mb-8 font-medium border-l-4 border-hell-flame pl-6">
              {post.excerpt}
            </p>

            {/* Article Body */}
            <article 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:font-black prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-hell-ash prose-p:leading-relaxed
                prose-li:text-hell-ash
                prose-strong:text-white
                prose-a:text-hell-flame prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-hell-smoke/20">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-hell-ash">Tags:</span>
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-hell-smoke/30 text-hell-ash text-sm rounded-sm hover:bg-hell-flame hover:text-white transition-colors cursor-pointer border border-hell-smoke/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-hell-smoke/20">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 text-sm font-medium text-hell-ash">
                  <Share2 size={16} className="text-hell-flame" />
                  Artikel teilen:
                </span>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.persoflex-gmbh.de/blog/${post.id}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-hell-smoke/30 text-white rounded-sm flex items-center justify-center hover:bg-hell-flame transition-colors border border-hell-smoke/20"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.persoflex-gmbh.de/blog/${post.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-hell-smoke/30 text-white rounded-sm flex items-center justify-center hover:bg-hell-flame transition-colors border border-hell-smoke/20"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.persoflex-gmbh.de/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-hell-smoke/30 text-white rounded-sm flex items-center justify-center hover:bg-hell-flame transition-colors border border-hell-smoke/20"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative p-8 sm:p-12 rounded-sm overflow-hidden border border-hell-flame/30">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-hell-flame/20 to-hell-ember/20"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Interesse geweckt?</h3>
                <p className="text-hell-ash">Kontaktieren Sie uns noch heute!</p>
              </div>
              <div className="flex gap-4">
                <NavLink 
                  to="/jobs"
                  className="inline-flex items-center gap-2 bg-hell-flame text-white px-6 py-3 font-bold rounded-sm hover:bg-white hover:text-hell-void transition-colors"
                >
                  Jobs ansehen
                </NavLink>
                <NavLink 
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 font-bold rounded-sm border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Kontakt
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black text-white mb-8">
              Weitere Artikel zum Thema
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <NavLink
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-hell-charcoal/50 border border-hell-smoke/20 rounded-sm p-6 hover:border-hell-flame/50 transition-all"
                >
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-hell-flame/10 text-hell-flame text-xs font-bold rounded-sm mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-hell-flame transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-hell-ash text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-hell-flame font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                    Weiterlesen <ArrowRight size={14} />
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Link */}
      <section className="py-8 border-t border-hell-smoke/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <NavLink 
            to="/blog"
            className="inline-flex items-center gap-2 text-hell-flame font-bold hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Alle Blogartikel ansehen
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
