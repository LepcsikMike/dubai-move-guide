
import { FileText, FileQuestion, Video } from 'lucide-react';
import React from 'react';

export interface Resource {
  title: string;
  description: string;
  id: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  resources: Resource[];
}

// This will be used in the main component, so we'll create icons there
export const getResourceCategories = (icons: {
  fileText: React.ReactNode;
  fileQuestion: React.ReactNode;
  video: React.ReactNode;
}): ResourceCategory[] => [
  {
    id: "checklists",
    title: "Umzugs-Checklisten",
    icon: icons.fileText,
    resources: [
      {
        title: "6-Monats-Vorbereitungscheckliste",
        description: "Beginnen Sie Ihre Planung frühzeitig mit dieser umfassenden Checkliste der Aufgaben, die 3-6 Monate vor Ihrem Umzug zu erledigen sind.",
        id: "pre-move-checklist"
      },
      {
        title: "1-Monat letzte Vorbereitungen",
        description: "Wichtige Aufgaben, die im letzten Monat vor dem Umzug nach Dubai zu erledigen sind.",
        id: "final-prep-checklist"
      },
      {
        title: "Erste Woche in Dubai Checkliste",
        description: "Wesentliche Aufgaben, die in Ihrer ersten Woche in Dubai zu erledigen sind, um sich schnell einzuleben.",
        id: "first-week-checklist"
      },
      {
        title: "Dokumentenvorbereitungsleitfaden",
        description: "Vollständige Liste der Dokumente, die vor dem Umzug gesammelt, übersetzt und beglaubigt werden müssen.",
        id: "document-guide"
      }
    ]
  },
  {
    id: "guides",
    title: "Umfassende Leitfäden",
    icon: icons.fileQuestion,
    resources: [
      {
        title: "Vollständiger Wohnungsleitfaden",
        description: "Detaillierter Überblick über Dubais Stadtteile, den Mietprozess und die Möglichkeiten zum Immobilienkauf.",
        id: "housing-guide"
      },
      {
        title: "Visumantragsanleitung",
        description: "Schritt-für-Schritt-Anleitung zur Beantragung verschiedener Arten von Dubai-Visa aus Deutschland.",
        id: "visa-guide"
      },
      {
        title: "Banking & Finanzeinrichtung",
        description: "Wie Sie Ihr Finanzleben in Dubai einrichten, von Bankkonten bis hin zu Investitionen.",
        id: "banking-guide"
      },
      {
        title: "Deutsche Schulen & Bildung",
        description: "Optionen für deutsche Lehrplanbildung und internationale Schulen in Dubai.",
        id: "education-guide"
      }
    ]
  },
  {
    id: "videos",
    title: "Video-Ressourcen",
    icon: icons.video,
    resources: [
      {
        title: "Dubai Stadtteiltouren",
        description: "Virtuelle Touren durch beliebte Expatriate-Viertel in Dubai.",
        id: "neighborhood-videos"
      },
      {
        title: "Visumsprozess erklärt",
        description: "Visuelle Anleitung durch den Visumantrags- und Genehmigungsprozess.",
        id: "visa-videos"
      },
      {
        title: "Tipps zur kulturellen Anpassung",
        description: "Praktische Ratschläge zur Anpassung an Dubais kulturelles Umfeld.",
        id: "cultural-videos"
      },
      {
        title: "Deutsche Erfolgsgeschichten",
        description: "Interviews mit Deutschen, die erfolgreich nach Dubai umgezogen sind.",
        id: "success-videos"
      }
    ]
  }
];
