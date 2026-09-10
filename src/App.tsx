import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhatIDo } from './components/WhatIDo';
import { GrowthFramework } from './components/GrowthFramework';
import { SelectedWork } from './components/SelectedWork';
import { ImpactSection } from './components/ImpactSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DanengCaseStudy } from './components/DanengCaseStudy';
import { XwonbetCaseStudy } from './components/XwonbetCaseStudy';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { CaseStudyProject } from './types';

type ViewType = 'home' | 'daneng-ai' | 'xwonbet';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyProject | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Determine view and initial section from URL pathname and hash
  const parseCurrentUrl = useCallback((): { view: ViewType; section?: string } => {
    const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      path === '/projects/daneng-ai' ||
      path === '/projects/daneng' ||
      hash === '#daneng-ai' ||
      hash === '#case-study-daneng' ||
      hash === '#/projects/daneng-ai'
    ) {
      return { view: 'daneng-ai' };
    }

    if (
      path === '/projects/xwonbet' ||
      path === '/projects/xwon' ||
      hash === '#xwonbet' ||
      hash === '#case-study-xwonbet' ||
      hash === '#/projects/xwonbet'
    ) {
      return { view: 'xwonbet' };
    }

    const section = hash.replace('#', '');
    return { view: 'home', section: section || undefined };
  }, []);

  // Listen to browser navigation (back/forward and hash changes)
  useEffect(() => {
    const handleLocationChange = () => {
      const { view, section } = parseCurrentUrl();
      setCurrentView(view);

      if (view === 'home' && section) {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [parseCurrentUrl]);

  // Track active section as user scrolls
  useEffect(() => {
    if (currentView !== 'home') return;

    const sectionIds = ['home', 'about', 'services', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Check if at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 220; // account for navbar + breathing room
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      window.history.pushState({}, '', sectionId === 'home' ? '/' : `/#${sectionId}`);
      setCurrentView('home');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    if (sectionId === 'home') {
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      window.history.pushState({}, '', `/#${sectionId}`);
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleOpenDaneng = () => {
    window.history.pushState({}, '', '/projects/daneng-ai');
    setCurrentView('daneng-ai');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenXwonbet = () => {
    window.history.pushState({}, '', '/projects/xwonbet');
    setCurrentView('xwonbet');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToPortfolio = () => {
    window.history.pushState({}, '', '/#projects');
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  // Dedicated DANENG AI Case Study Route
  if (currentView === 'daneng-ai') {
    return (
      <div className="min-h-screen bg-[#07080B] text-slate-100 selection:bg-[#EAA039]/20 selection:text-[#EAA039]">
        <DanengCaseStudy
          onBack={handleBackToPortfolio}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <Footer onNavigateSection={handleScrollToSection} />
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    );
  }

  // Dedicated XWONBET Case Study Route
  if (currentView === 'xwonbet') {
    return (
      <div className="min-h-screen bg-[#07080B] text-slate-100 selection:bg-[#EAA039]/20 selection:text-[#EAA039]">
        <XwonbetCaseStudy
          onBack={handleBackToPortfolio}
          onOpenContact={() => setIsContactOpen(true)}
        />
        <Footer onNavigateSection={handleScrollToSection} />
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    );
  }

  // Main Hybrid Single-Page Layout (/)
  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 selection:bg-[#EAA039]/20 selection:text-[#EAA039] relative selection:outline-none">
      {/* Sticky / Fixed Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
        onNavigateSection={handleScrollToSection}
      />

      <main>
        {/* 1. HOME */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. ABOUT */}
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />

        {/* 3. SERVICES / SKILLS */}
        <WhatIDo onOpenContact={() => setIsContactOpen(true)} />
        <GrowthFramework onOpenContact={() => setIsContactOpen(true)} />

        {/* 4. PROJECTS / PORTFOLIO */}
        <SelectedWork
          onSelectProject={(project) => {
            if (project.id === 'daneng-ai') {
              handleOpenDaneng();
            } else if (project.id === 'xwonbet') {
              handleOpenXwonbet();
            } else {
              setActiveCaseStudy(project);
            }
          }}
        />

        {/* 5. EXPERIENCE / ACHIEVEMENTS */}
        <ImpactSection
          onExploreWork={() => handleScrollToSection('projects')}
        />

        {/* 6. CONTACT */}
        <CtaSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleScrollToSection} />

      {/* Case Study Modal (for secondary project items or quick previews) */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onOpenContact={() => {
          setActiveCaseStudy(null);
          setIsContactOpen(true);
        }}
        onViewFullDaneng={() => {
          setActiveCaseStudy(null);
          handleOpenDaneng();
        }}
        onViewFullXwonbet={() => {
          setActiveCaseStudy(null);
          handleOpenXwonbet();
        }}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

