import { useState, useEffect } from 'react';

export const useCustomAnimations = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mouseDistance, setMouseDistance] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom intersection observer logic
  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Custom timing for sequential animations
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [elementRef]);

  // Custom mouse distance calculation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMouseDistance({
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [elementRef]);

  // Custom scroll progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const scrollPercentage = 1 - (rect.bottom / window.innerHeight);
      setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  // Custom animation utilities
  const getCustomTransform = () => {
    const rotateX = mouseDistance.y * 10;
    const rotateY = mouseDistance.x * -10;
    const translateZ = Math.abs(mouseDistance.x * mouseDistance.y) * 50;
    
    return {
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  const getProgressStyles = () => {
    const hue = scrollProgress * 60; // Custom color progression
    const scale = 1 + scrollProgress * 0.2;
    
    return {
      backgroundColor: `hsl(${hue}, 70%, 60%)`,
      transform: `scale(${scale})`,
      opacity: 0.3 + scrollProgress * 0.7,
    };
  };

  return {
    isVisible,
    mouseDistance,
    scrollProgress,
    getCustomTransform,
    getProgressStyles,
  };
}; 