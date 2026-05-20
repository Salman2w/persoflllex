import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2, Linkedin, Facebook, Twitter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from './Blog';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Schema.org Structured Data for Article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage ? `https://www.persoflex-gmbh.de${post.featuredImage}` : "https://www.persoflex-gmbh.de/bilder/og-default.jpg",
    "author": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "url": "https://www.persoflex-gmbh.de"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.persoflex-gmbh.de/bilder/logo.webp"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.persoflex-gmbh.de/blog/${post.id}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "inLanguage": "de-DE",
    "wordCount": post.content.split(/\s+/).length
  };

  const shareUrl = `https://www.persoflex-gmbh.de/blog/${post.id}`;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${post.title} | PersoFlex GmbH Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonicalUrl={shareUrl}
        ogType="article"
        articlePublishedTime={post.date}
        articleAuthor={post.author}
        ogImage={post.featuredImage}
        structuredData={articleStructuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gray-50 border-b border-gray-100" role="banner">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <NavLink 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
              Zurück zum Blog
            </NavLink>
          </nav>

          {/* Category */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-5">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight text-balance">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <User size={14} className="text-orange-500" strokeWidth={2} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-orange-500" strokeWidth={2} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </time>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-orange-500" strokeWidth={2} />
              {post.readTime} Lesezeit
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="pt-10 pb-6">
          <div className="max-w-3xl mx-auto px-6">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-auto max-h-[420px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6">
          {/* Lead Text / Excerpt */}
          <div className="mb-12 pl-6 border-l-2 border-orange-500">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </div>

          {/* Article Body - uses custom .blog-content class for reliable typography */}
          <article 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2">Tags</span>
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium rounded-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <Share2 size={14} />
                Teilen
              </span>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
                aria-label="Auf LinkedIn teilen"
              >
                <Linkedin size={16} strokeWidth={1.75} />
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
                aria-label="Auf Facebook teilen"
              >
                <Facebook size={16} strokeWidth={1.75} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"
                aria-label="Auf Twitter teilen"
              >
                <Twitter size={16} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">Interesse geweckt?</h2>
                <p className="text-gray-600 text-sm md:text-base">Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <NavLink 
                  to="/jobs"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  Jobs ansehen <ArrowRight size={14} />
                </NavLink>
                <NavLink 
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
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
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2">
                  Weiterlesen
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  Weitere Artikel
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <NavLink
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-orange-600 mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors mb-2 leading-snug tracking-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-orange-600 font-medium text-sm mt-4 group-hover:gap-2 transition-all">
                    Weiterlesen <ArrowRight size={13} />
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Link */}
      <section className="py-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <NavLink 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={15} />
            Alle Blogartikel ansehen
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
