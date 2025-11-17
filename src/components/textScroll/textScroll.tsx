import TextScrollMarquee from "../lightswind/text-scroll-marquee";

const textScroll = () => {
  return (
    <TextScrollMarquee
      baseVelocity={3}
      direction="left"
      className="text-8xl font-extrabold uppercase text-text"
      scrollDependent={false}
      delay={500}
    >
      E-commerce Intelligence
    </TextScrollMarquee>
  );
};
export default textScroll;
