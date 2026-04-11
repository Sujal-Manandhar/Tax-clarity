import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import { blogPosts as BLOG_POSTS } from "@/data/blogPosts";

const Resources = () => {
  useEffect(() => {
    document.title = "Tax Resources & Blog | Tax Clarity Nepal";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert tax guides, compliance updates, and business tips for individuals and companies in Nepal.");
    }
  }, []);

  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Insights & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Actionable advice, regulatory updates, and expert guides to help you navigate taxation and compliance smoothly in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 md:py-12">
          <div className="container-custom">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8 lg:flex lg:gap-10 lg:items-center">
              <div className="mb-6 lg:w-1/2 lg:mb-0">
                <div className="aspect-[16/9] w-full items-center justify-center rounded-xl bg-primary/10 flex p-8 text-center overflow-hidden relative group">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/20 opacity-80 transition-transform duration-500 group-hover:scale-105" />
                   <h3 className="text-2xl md:text-3xl font-bold text-primary relative z-10 shrink-0 select-none">Tax Clarity Highlights</h3>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="mb-4 text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl hover:text-primary transition-colors cursor-pointer">
                  <Link to={`/resources/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="mb-8 text-muted-foreground md:text-lg">
                  {featuredPost.excerpt}
                </p>
                <Button asChild className="group gap-2">
                  <Link to={`/resources/${featuredPost.slug}`}>
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Latest Articles</h2>
            <Link to="#" className="text-sm font-medium text-primary hover:underline">
              View All Categories
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary bg-primary/5 px-2 py-1 rounded-md">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary cursor-pointer line-clamp-2">
                    <Link to={`/resources/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <Link to={`/resources/${post.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Subscribe Section */}
          <div className="mt-20 rounded-2xl bg-primary p-8 md:p-12 text-center text-primary-foreground shadow-lg">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">Get Tax Updates in Your Inbox</h3>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80 md:text-lg">
              Subscribe to our newsletter and never miss an important tax deadline, regulatory change, or money-saving tip in Nepal.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex h-11 w-full rounded-md border border-input bg-background/10 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" variant="secondary" className="h-11 px-8 font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
