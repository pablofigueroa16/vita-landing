import TextScrollMarquee from "../lightswind/text-scroll-marquee";

const textScroll = () => {
  return (
    <TextScrollMarquee
      baseVelocity={5}
      direction="left"
      className="uppercase text-text text-8xl font-extrabold uppercase text-text"
      scrollDependent={false}
      delay={500}
    >
      E-commerce Intelligence
    </TextScrollMarquee>
  );
};
export default textScroll;
