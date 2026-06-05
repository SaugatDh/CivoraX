'use client';

import { useState, useEffect, useCallback, useSyncExternalStore, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { openContactModal } from '@/lib/contactModal';

const aboutChildren = [
  { label: 'Introduction', href: '/about/introduction' },
  { label: 'How we work', href: '/about/how-we-work' },
  { label: 'Our Team', href: '/about/our-team' },
  { label: 'Our Activities', href: '/about/our-activities' },
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about', children: aboutChildren },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const aboutDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setExpandedItem(null);
  }, []);

  const openAboutDropdown = useCallback(() => {
    if (aboutDropdownTimeout.current) clearTimeout(aboutDropdownTimeout.current);
    setAboutDropdownOpen(true);
  }, []);

  const scheduleCloseAboutDropdown = useCallback(() => {
    if (aboutDropdownTimeout.current) clearTimeout(aboutDropdownTimeout.current);
    aboutDropdownTimeout.current = setTimeout(() => setAboutDropdownOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (aboutDropdownTimeout.current) clearTimeout(aboutDropdownTimeout.current);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => closeMenu();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [closeMenu]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleAccordion = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  return (
    <header id="header-section" className="sticky top-0 z-40 backdrop-blur-md bg-surface-3/85 border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-5">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0.5 text-xl font-semibold tracking-tight text-foreground" id="header-logo">
            <span>Civora</span><span className="text-accent-2 font-black">X</span>
          </Link>
          
          <nav className="flex items-center gap-8 text-sm font-medium text-foreground-secondary" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isAboutActive = pathname.startsWith('/about');
              const hasChildren = !!item.children;

              if (hasChildren) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={openAboutDropdown}
                    onMouseLeave={scheduleCloseAboutDropdown}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 hover:text-foreground transition relative group py-1 ${isAboutActive ? 'text-foreground font-semibold' : 'text-foreground-secondary'}`}
                      aria-haspopup="true"
                      aria-expanded={aboutDropdownOpen}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-2 transition-all duration-300 ${isAboutActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </button>

                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${aboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
                    >
                      <div className="w-56 bg-surface-white border border-border rounded-xl shadow-lg overflow-hidden">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                isChildActive
                                  ? 'text-foreground bg-surface-2 font-semibold'
                                  : 'text-foreground-secondary hover:text-foreground hover:bg-surface-2/60'
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-foreground transition relative group py-1 ${isActive ? 'text-foreground font-semibold' : 'text-foreground-secondary'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-2 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={openContactModal}
            className="inline-flex items-center gap-2 bg-accent-2 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-accent-2-hover transition-all duration-300 shadow-sm cursor-pointer"
            id="header-cta"
          >
            Get In Touch <span className="transform translate-y-[-0.5px]">→</span>
          </button>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center gap-0.5 text-xl font-semibold tracking-tight text-foreground" id="header-logo-mobile">
            <span>Civora</span><span className="text-accent-2 font-black">X</span>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="p-2 text-foreground-secondary hover:text-foreground transition"
            id="mobile-nav-toggle"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile sidebar + backdrop — portaled to body to escape header stacking context */}
      {mounted && createPortal(
        <>
          {/* Backdrop overlay */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
              mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Sidebar drawer */}
          <div
            className={`fixed top-0 left-0 z-50 h-screen w-[320px] max-w-[85vw] bg-surface-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            id="mobile-sidebar-drawer"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <Link href="/" className="flex items-center gap-0.5 text-lg font-semibold tracking-tight text-foreground" onClick={closeMenu}>
                <span>Civora</span><span className="text-accent-2 font-black">X</span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-surface-2 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isExpanded = expandedItem === item.label;
                const hasChildren = !!item.children;

                return (
                  <div key={item.href} className="mb-1">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => toggleAccordion(item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                            isActive ? 'text-foreground bg-surface-2' : 'text-foreground-secondary hover:text-foreground hover:bg-surface-2/60'
                          }`}
                        >
                          {item.label}
                          <ChevronRight
                            className={`w-4 h-4 text-foreground-muted transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                          />
                        </button>

                        <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-4 pr-2 py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMenu}
                                className="block px-4 py-2.5 rounded-lg text-sm text-foreground-secondary hover:text-foreground hover:bg-surface-2/60 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive ? 'text-foreground bg-surface-2' : 'text-foreground-secondary hover:text-foreground hover:bg-surface-2/60'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Drawer footer CTA */}
            <div className="px-6 py-4 border-t border-border shrink-0">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openContactModal();
                }}
                className="flex items-center justify-center gap-2 w-full bg-accent-2 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-accent-2-hover transition-all duration-300 shadow-sm cursor-pointer"
              >
                Get In Touch <span className="transform translate-y-[-0.5px]">→</span>
              </button>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
