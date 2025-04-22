
import React from 'react';
import { FileDown } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface Resource {
  title: string;
  description: string;
  id: string;
}

interface ResourceCategoryProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  resources: Resource[];
}

const ResourceCategory = ({ id, title, icon, resources }: ResourceCategoryProps) => {
  const downloadResource = (resourceName: string) => {
    toast({
      title: "Download gestartet",
      description: `${resourceName} wird auf Ihr Gerät heruntergeladen.`,
      duration: 3000,
    });
  };

  return (
    <section id={id} className="py-16 bg-white">
      <div className="section-container">
        <div className="mb-12 flex items-center">
          <div className="mr-4">{icon}</div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="bg-dubai-sand/30 rounded-lg p-6 border border-dubai-dark-sand/20 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4 text-sm min-h-[60px]">{resource.description}</p>
              <button
                onClick={() => downloadResource(resource.title)}
                className="text-dubai-gold font-medium flex items-center hover:underline"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Ressource herunterladen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategory;
