import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/resources" replace />;
  }

  useEffect(() => {
    document.title = `${post.title} | TaxCare Nepal`;
    
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Standard SEO
    setMetaTag('meta[name="description"]', 'content', post.excerpt);
    
    // Open Graph / Facebook
    setMetaTag('meta[property="og:type"]', 'content', 'article');
    setMetaTag('meta[property="og:title"]', 'content', post.title);
    setMetaTag('meta[property="og:description"]', 'content', post.excerpt);
    setMetaTag('meta[property="og:url"]', 'content', window.location.href);
    setMetaTag('meta[property="og:site_name"]', 'content', 'TaxCare Nepal');
    
    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', post.title);
    setMetaTag('meta[name="twitter:description"]', 'content', post.excerpt);

    return () => {
      // Cleanup dynamically added OG tags to prevent leaking into other routes
      document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(el => el.remove());
    };
  }, [post]);

  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "TaxCare Nepal"
    }
  };

  return (
    <Layout>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <div className="container-custom py-12 md:py-20">
        <Link to="/resources" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
        </Link>
        <article className="max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </header>

          <div className="max-w-none text-foreground leading-relaxed md:text-lg mb-12">
             {post.content}
          </div>

          {post.faqs.length > 0 && (
            <section className="mt-16 bg-muted/30 p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6 text-left">
                {post.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex gap-2">
                       <span className="text-primary font-bold">Q:</span> {faq.question}
                    </h3>
                    <p className="text-muted-foreground flex gap-2">
                       <span className="text-primary font-bold">A:</span> {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Social Share / Tax Consult CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
             <h4 className="text-xl font-bold mb-2">Need Expert Help with Your Taxes?</h4>
             <p className="text-muted-foreground mb-4">Our professional team can guide you through tailored tax and compliance strategies.</p>
             <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
               Get a Free Consultation
             </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
