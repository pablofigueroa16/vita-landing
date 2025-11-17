"use client";
import React, { useEffect, useRef, useState } from "react";

export interface ShowcaseCard {
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
  description?: string;
}

interface ShowcaseProps {
  cards: ShowcaseCard[];
  cardHeight?: string;
  animationDuration?: string;
  sectionHeightMultiplier?: number;
  intersectionThreshold?: number;
  className?: string;
}

const Showcase: React.FC<ShowcaseProps> = ({
  cards,
  cardHeight = "60vh",
  animationDuration = "0.5s",
  sectionHeightMultiplier = 2.5,
  intersectionThreshold = 0.1,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const cardCount = Math.min(cards.length, 5);

  const cardStyle = {
    height: cardHeight,
    maxHeight: "500px",
    borderRadius: "20px",
    transition: `transform ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1), opacity ${animationDuration} cubic-bezier(0.19, 1, 0.22, 1)`,
    willChange: "transform, opacity",
  };

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: intersectionThreshold }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !cardsContainerRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const sectionTop = sectionRect.top;
          const sectionHeight = sectionRef.current.offsetHeight;
          const scrollableDistance = sectionHeight - viewportHeight;

          let progress = 0;
          if (sectionTop <= 0 && Math.abs(sectionTop) <= scrollableDistance) {
            progress = Math.abs(sectionTop) / scrollableDistance;
          } else if (sectionTop < 0) {
            progress = 1;
          }

          let newActiveIndex = 0;
          const progressPerCard = 1 / cardCount;
          for (let i = 0; i < cardCount; i++) {
            if (progress >= progressPerCard * (i + 1)) {
              newActiveIndex = i + 1;
            }
          }

          setActiveCardIndex(Math.min(newActiveIndex, cardCount - 1));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [cardCount, sectionHeightMultiplier, intersectionThreshold]);

  const getCardTransform = (index: number) => {
    const isVisible = isIntersecting && activeCardIndex >= index;
    const scale = 0.9 + index * 0.05;
    let translateY = "100px";

    if (isVisible) {
      translateY = `${90 - index * 30}px`;
    }

    return {
      transform: `translateY(${translateY}) scale(${scale})`,
      opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
      zIndex: 10 + index * 10,
      pointerEvents: isVisible ? "auto" : "none",
    };
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full ${className}`}
      style={{ height: `${sectionHeightMultiplier * 100}vh` }}
    >
      <div
        className="sticky top-0 w-full h-screen flex items-center 
          justify-center overflow-hidden"
      >
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col justify-center">
          <div
            ref={cardsContainerRef}
            className="relative w-full max-w-5xl mx-auto shrink-0"
            style={{ height: cardHeight }}
          >
            {cards.slice(0, 5).map((card, index) => {
              const cardTransform = getCardTransform(index);

              return (
                <div
                  key={index}
                  className="absolute z-50 overflow-hidden shadow-2xl 
                    transition-all duration-300 border"
                  style={{
                    ...cardStyle,
                    top: 0,
                    left: "50%",
                    transform: `translateX(-50%) ${cardTransform.transform}`,
                    width: "60%",
                    maxWidth: "100%",
                    opacity: cardTransform.opacity,
                    zIndex: cardTransform.zIndex,
                    pointerEvents:
                      cardTransform.pointerEvents as React.CSSProperties["pointerEvents"],
                    backgroundColor: "hsl(205 55% 12%)",
                    borderColor: "hsl(200 100% 45% / 0.3)",
                  }}
                >
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      background: "linear-gradient(135deg, hsl(205 50% 16%) 0%, hsl(205 55% 12%) 100%)",
                    }}
                  />

                  {card.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <div 
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: "hsl(200 100% 45% / 0.2)",
                          borderColor: "hsl(200 100% 45% / 0.4)",
                          color: "hsl(0 0% 95%)",
                        }}
                      >
                        <span className="text-sm font-medium">
                          {card.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                    <div className="max-w-lg flex flex-col gap-4">
                      {card.icon && (
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{
                            backgroundColor: "hsl(200 100% 45% / 0.15)",
                            borderColor: "hsl(200 100% 45% / 0.3)",
                            border: "1px solid",
                          }}
                        >
                          {card.icon}
                        </div>
                      )}
                      
                      <h3 
                        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                        style={{ color: "hsl(0 0% 95%)" }}
                      >
                        {card.title}
                      </h3>
                      
                      {card.subtitle && (
                        <p 
                          className="text-lg font-semibold"
                          style={{ color: "hsl(200 100% 45%)" }}
                        >
                          {card.subtitle}
                        </p>
                      )}
                      
                      {card.description && (
                        <p 
                          className="text-base leading-relaxed"
                          style={{ color: "hsl(0 0% 70%)" }}
                        >
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

