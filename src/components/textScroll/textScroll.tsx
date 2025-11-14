import TextScrollMarquee from "../lightswind/text-scroll-marquee";

const textScroll = () => {
  return (
    <TextScrollMarquee
      baseVelocity={5}
      direction="left"
      className="text-5xl font-bold uppercase text-text"
      scrollDependent={false}
      delay={500}
    >
      E-commerce Intelligence
    </TextScrollMarquee>
  );
};
export default textScroll;
