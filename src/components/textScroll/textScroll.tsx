import TextScrollMarquee from "../lightswind/text-scroll-marquee";

const TextScroll = () => {
  return (
    <TextScrollMarquee
      baseVelocity={5}
      direction="left"
      className="text-8xl font-extrabold uppercase text-text tracking-wide
                 animate-[pulse_3s_ease-in-out_infinite]"
      scrollDependent={false}
      delay={500}
    >
      E-commerce Intelligence
    </TextScrollMarquee>
  );
};

export default TextScroll;
