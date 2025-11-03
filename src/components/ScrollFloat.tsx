"use client";
import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    if (typeof children === 'string') {
      return children.split('').map((char, index) => (
        <span className="inline-block word" key={index}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    // Fallback: si no es string, animar el contenido completo como un bloque
    return [
      <span className="inline-block word" key="content">
        {children}
      </span>
    ];
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // Contexto GSAP para limpiar correctamente en desmontaje y evitar fugas
    const ctx = (gsap as any).context ? (gsap as any).context(() => {
      const charElements = el.querySelectorAll('.inline-block');

      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true
          }
        }
      );
    }, el) : null;

    return () => {
      if (ctx && typeof ctx.revert === 'function') {
        ctx.revert();
      } else {
        // Fallback: matar triggers si gsap.context no está disponible
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, splitText]);

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
