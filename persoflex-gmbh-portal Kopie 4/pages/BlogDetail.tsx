import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2, Linkedin, Facebook, Twitter } from 'lucide-react';
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
      <section className="relative pt-32 pb-16 bg-gray-50" role="banner">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <NavLink 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Zurück zum Blog
            </NavLink>
          </nav>

          {/* Category */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full mb-6">
            <Tag size={12} />
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <span className="flex items-center gap-2">
              <User size={16} className="text-orange-500" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-orange-500" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  day: '2-digit', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </time>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-orange-500" />
              {post.readTime} Lesezeit
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-auto max-h-96 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
            {/* Lead Text */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-orange-500 pl-6">
              {post.excerpt}
            </p>

            {/* Article Body */}
            <article 
              className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-orange-100 prose-h2:leading-tight
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-orange-600 prose-h3:leading-snug
                prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:text-base prose-p:mb-5
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:my-2
                prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6
                prose-ol:my-6 prose-ol:space-y-2 prose-ol:pl-6
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-a:text-orange-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-orange-700
                prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-800
                [&>ul>li]:marker:text-orange-500 [&>ol>li]:marker:text-orange-500 [&>ol>li]:marker:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Tags:</span>
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Share2 size={16} className="text-orange-500" />
                  Artikel teilen:
                </span>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  aria-label="Auf LinkedIn teilen"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  aria-label="Auf Facebook teilen"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  aria-label="Auf Twitter teilen"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Interesse geweckt?</h2>
                <p className="text-gray-600">Kontaktieren Sie uns noch heute!</p>
              </div>
              <div className="flex gap-4">
                <NavLink 
                  to="/jobs"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded-lg transition-colors"
                >
                  Jobs ansehen
                </NavLink>
                <NavLink 
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 font-semibold rounded-lg border-2 border-gray-200 hover:border-orange-300 hover:text-orange-500 transition-colors"
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Weitere Artikel zum Thema
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <NavLink
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-orange-500 font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                    Weiterlesen <ArrowRight size={14} />
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Link */}
      <section className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <NavLink 
            to="/blog"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
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
