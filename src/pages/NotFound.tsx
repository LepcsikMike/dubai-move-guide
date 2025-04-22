
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dubai-dark-sand/5 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-dubai-gold mb-2">404</h1>
        <h2 className="text-2xl font-bold mb-4">Seite nicht gefunden</h2>
        <p className="text-gray-600 mb-8">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-dubai-gold hover:bg-dubai-gold/90">
            <Link to="/" className="flex items-center">
              <Home size={18} className="mr-2" />
              Zur Startseite
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-dubai-gold text-dubai-gold hover:bg-dubai-gold/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} className="mr-2" />
            Zurück
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
