import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock news data
  const mockArticles = [
    {
      id: "1",
      title: "Nearly KSh 2,000 per day – how much villa prices have increased",
      excerpt: "Despite major fluctuations in the housing market, prices in Nairobi have surged over the past decade. In Karen, villa prices have increased by almost KSh 2,000 per day...",
      image: "/placeholder.svg",
      category: "Market Analysis",
      author: "Jane Mwangi",
      date: "2024-03-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: "2", 
      title: "Experience decides when the market is difficult to interpret",
      excerpt: "In Westlands, the housing market is anything but quiet. Activity is high, but buyers' and sellers' expectations often pull in different directions...",
      image: "/placeholder.svg",
      category: "Market Analysis",
      author: "Peter Kariuki",
      date: "2024-03-14",
      readTime: "4 min read",
      featured: true
    },
    {
      id: "3",
      title: "Buyers' belief in price increases grows in March",
      excerpt: "33 percent of buyers in March believe in rising prices over the next six months. This is an increase of 3 percentage points since February...",
      image: "/placeholder.svg", 
      category: "Market Trends",
      author: "Sarah Njeri",
      date: "2024-03-12",
      readTime: "3 min read",
      featured: false
    },
    {
      id: "4",
      title: "First-time buyers guide: What to know before purchasing",
      excerpt: "Buying your first property can be overwhelming. Our comprehensive guide covers everything from financing to legal requirements...",
      image: "/placeholder.svg",
      category: "Buying Guide",
      author: "Michael Ochieng",
      date: "2024-03-10",
      readTime: "8 min read",
      featured: false
    },
    {
      id: "5",
      title: "Interior design trends shaping modern homes in 2024",
      excerpt: "From sustainable materials to smart home technology, discover the interior design trends that are transforming modern homes this year...",
      image: "/placeholder.svg",
      category: "Design & Lifestyle",
      author: "Grace Wanjiku",
      date: "2024-03-08",
      readTime: "6 min read",
      featured: false
    },
    {
      id: "6",
      title: "Property investment opportunities in emerging Nairobi suburbs",
      excerpt: "As Nairobi expands, new suburbs are becoming attractive investment destinations. We analyze the potential of areas like Ruiru, Kiambu, and Ongata Rongai...",
      image: "/placeholder.svg",
      category: "Investment",
      author: "David Kimani",
      date: "2024-03-05",
      readTime: "7 min read",
      featured: false
    }
  ];

  const categories = [
    { id: "all", label: "All Articles", count: mockArticles.length },
    { id: "market", label: "Market Analysis", count: 2 },
    { id: "guides", label: "Buying Guides", count: 1 },
    { id: "design", label: "Design & Lifestyle", count: 1 },
    { id: "investment", label: "Investment", count: 1 },
    { id: "legal", label: "Legal & Finance", count: 1 }
  ];

  const featuredArticles = mockArticles.filter(article => article.featured);
  const regularArticles = mockArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Property News</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Latest news from the property market. Here we collect everything from interior design tips to guides and financial questions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs lg:text-sm"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Latest News Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Latest News</h2>
            <Button variant="outline">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 text-xs">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Property News</h3>
            <p className="mb-6 opacity-90">
              Get the latest property market insights, buying guides, and investment tips delivered to your inbox.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default News;