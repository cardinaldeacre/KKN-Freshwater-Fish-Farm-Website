import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  title = '', // Prop Baru: Teks Judul
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  rightElement, // Prop Baru: Untuk ThemeToggle
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;
        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;
        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });
        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });
        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;
        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };
    layout();
    const onResize = () => layout();
    window.addEventListener('resize', onResize);
    if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => { });
    if (initialLoadAnimation) {
      if (logoRef.current) gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease });
      if (navItemsRef.current) gsap.fromTo(navItemsRef.current, { width: 0 }, { width: 'auto', duration: 0.6, ease });
    }
    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: 'auto' });
  };

  const handleLeave = i => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: 'auto' });
  };

  const isRouterLink = href => href && !href.startsWith('http') && !href.startsWith('//') && !href.startsWith('#');

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '48px',
    '--pill-gap': '4px'
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (newState) {
      gsap.set(menu, { visibility: 'visible' });
      gsap.fromTo(menu,
        { opacity: 0, y: -20, scaleY: 0.8 },
        { opacity: 1, y: 0, scaleY: 1, duration: 0.4, ease: "power2.out", transformOrigin: "top center" }
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -20,
        scaleY: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => gsap.set(menu, { visibility: 'hidden' })
      });
    }
  };

  return (
    <div className={`fixed top-4 left-0 w-full z-[100] px-4 flex justify-center ${className}`} style={cssVars}>
      <nav className="flex items-center gap-2 bg-[var(--base)] p-1 rounded-full shadow-2xl border border-gray-200 dark:border-blue-900/30">

        <Link to="/" className="flex items-center gap-3 px-4 py-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt={logoAlt} className="h-8 w-8 rounded-full object-cover" />
          <span className="font-bold text-sm md:text-base dark:text-white whitespace-nowrap">
            {title}
          </span>
        </Link>

        <div ref={navItemsRef} className="hidden md:flex items-center">
          <ul className="list-none flex items-center m-0 p-0 gap-[var(--pill-gap)]">
            {items.map((item, i) => (
              <li key={item.href} className="h-full">
                <Link
                  to={item.href}
                  className="relative overflow-hidden inline-flex items-center justify-center px-5 h-[40px] no-underline rounded-full font-semibold text-sm uppercase tracking-wide transition-colors"
                  style={{ background: 'var(--pill-bg)', color: 'var(--pill-text)' }}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <span className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block w-0 h-0"
                    ref={el => (circleRefs.current[i] = el)}
                    style={{ background: 'var(--base)', willChange: 'transform' }} />
                  <span className="pill-label relative z-[2]">{item.label}</span>
                  <span className="pill-label-hover absolute z-[3] opacity-0" style={{ color: 'var(--hover-text)' }}>{item.label}</span>
                  {activeHref === item.href && (
                    <span className="absolute left-1/2 -bottom-1 w-1 h-1 bg-[var(--base)] rounded-full -translate-x-1/2" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {rightElement && (
          <div className="px-2 border-l border-gray-200 dark:border-blue-800 ml-2">
            {rightElement}
          </div>
        )}

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          className="md:hidden p-2 flex flex-col items-center justify-center gap-1"
        >
          <div className={`w-6 h-0.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} bg-blue-600`}></div>
          <div className={`w-6 h-0.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''} bg-blue-600`}></div>
          <div className={`w-6 h-0.5 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} bg-blue-600`}></div>
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[4.5em] left-4 right-4 rounded-[27px] shadow-2xl z-[998] origin-top overflow-hidden border border-gray-100 dark:border-blue-900/50"
        style={{
          background: 'var(--base, #f0f0f0)',
          visibility: 'hidden'
        }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block py-3 px-6 text-base font-semibold rounded-full transition-all duration-200 ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

        </ul>
      </div>
    </div>
  );
};

export default PillNav;