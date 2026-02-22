import { useEffect, useState, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { gsap } from 'gsap';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const coinRef = useRef(null);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleMouseEnter = () => {
        gsap.to(coinRef.current, {
            rotationY: "+=360",
            duration: 0.6,
            ease: "back.out(1.7)"
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 right-8 z-999 perspective-1000">
            <button
                ref={coinRef}
                type="button"
                onClick={scrollToTop}
                onMouseEnter={handleMouseEnter}
                className={`
                    p-3 rounded-full bg-yellow-500 text-blue-950 shadow-[0_0_20px_rgba(234,179,8,0.4)] 
                    border-4 border-yellow-300 transition-all duration-500
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
                `}
                aria-label="Kembali ke atas"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <ChevronUp className="w-6 h-6 stroke-[4px]" />

                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/20 to-transparent pointer-events-none"></div>
            </button>
        </div>
    );
}