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

  // Finde verwandte Artikel (gleiche Kategorie, aber nicht der aktuelle)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Strukturierte Daten für den Artikel
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
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={`${post.title} | PersoFlex GmbH Blog`}
        description={post.excerpt}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-orange opacity-10 blur-[100px] rounded-full"></div>
        
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
              className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Zurück zum Blog
            </NavLink>

            {/* Category */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs font-bold rounded-full mb-6">
              <Tag size={12} />
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime} Lesezeit
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            {/* Lead Text */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-brand-orange pl-6">
              {post.excerpt}
            </p>

            {/* Article Body */}
            <article 
              className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-brand-black
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600
                prose-strong:text-brand-black
                prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Tags:</span>
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <Share2 size={16} />
                  Artikel teilen:
                </span>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://www.persoflex-gmbh.de/blog/${post.id}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.persoflex-gmbh.de/blog/${post.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.persoflex-gmbh.de/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-black text-white p-8 sm:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 blur-[80px] rounded-full"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black mb-2">Interesse geweckt?</h3>
                <p className="text-gray-400">Kontaktieren Sie uns noch heute!</p>
              </div>
              <div className="flex gap-4">
                <NavLink 
                  to="/jobs"
                  className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 font-bold rounded-sm hover:bg-white hover:text-brand-black transition-colors"
                >
                  Jobs ansehen
                </NavLink>
                <NavLink 
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 font-bold rounded-sm border border-white hover:bg-white hover:text-brand-black transition-colors"
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black text-brand-black mb-8">
              Weitere Artikel zum Thema
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <NavLink
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-orange transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-orange font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                    Weiterlesen <ArrowRight size={14} />
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Link */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <NavLink 
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-3 transition-all"
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
