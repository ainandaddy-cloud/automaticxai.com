import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
  rootMargin?: string;
}

export const useScrollSpy = ({ 
  sectionIds, 
  offset = 100,
  rootMargin = '-20% 0px -35% 0px'
}: UseScrollSpyOptions) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const mostVisible = visibleSections[0];
          const sectionId = mostVisible.target.id;
          setActiveSection(sectionId);
        }
      },
      {
        rootMargin,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
};