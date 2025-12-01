import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
        <div className="text-center max-w-2xl px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <p className="text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </p>
          </div>

          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
            >
              View Portfolio
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
